import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pais } from '../interfaces/pais.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string ='https://restcountries.eu/rest/v2';


  get httpParams(){
    return new HttpParams().set('fields','name;alpha2Code;capital;population;flag');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url , {params: this.httpParams});
  }

  buscarCapital(termino:string): Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url , {params: this.httpParams});
  }

  buscarRegion(termino:string): Observable<Pais[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }
  
  buscarPaisAlpha( id:string ): Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }
}
