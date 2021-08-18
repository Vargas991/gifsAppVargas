import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  hayError: boolean = false;
  termino: string ='';
  paises: Pais[]=[];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.hayError=false;
    this.termino = termino;
 
    this.paisService.buscarCapital(this.termino)
     .subscribe((res)=>{
        
       this.paises = res;
 
     }, (err)=>{
       this.hayError=true;
       this.paises = [];
     })
  }
 
}
