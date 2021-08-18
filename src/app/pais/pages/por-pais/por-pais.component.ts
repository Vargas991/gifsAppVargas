import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
     
     ` a{
        cursor: pointer;
      }
      `
    
  ]
})
export class PorPaisComponent  {


  hayError        : boolean=false;
  paises          : Pais[]=[];
  paisesSugeridos : Pais[]=[];
  termino         : string ='';
  sugerencia      : boolean = false;

  constructor(private paisService: PaisService) { }

 buscar( termino: string ){
   this.sugerencia=false;
   this.hayError=false;
  

   this.paisService.buscarPais(this.termino)
    .subscribe((res)=>{
       
      this.paises = res;

    }, (err)=>{
      this.hayError=true;
      this.paises = [];
    })
 }

 sugerencias( event: string){
    this.sugerencia = true;
    this.hayError=false;
    this.termino = event;

    this.paisService.buscarPais(event)
      .subscribe(paises=>{ this.paisesSugeridos = paises.slice(0,5);
      }, err=>{
        this.paisesSugeridos= [];
      });

 }

}
