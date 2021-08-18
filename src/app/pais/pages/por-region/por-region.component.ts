import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] =['africa','americas','asia','europe','oceania']
  paises: Pais[]=[];
  regionActiva : string = '';
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }


  buscar(termino:string){

      this.paisService.buscarRegion(termino).subscribe((resp)=>{
          this.paises =resp;
      })
  }

  insertarCSS(region:string):string {
    return (region ===this.regionActiva)? 'btn btn-primary me-1': 'btn btn-outline-primary me-1';

  }

  activarRegion(region: string){
    
    if(region === this.regionActiva)return;
    this.regionActiva = region;
    this.paises=[];
    this.buscar(this.regionActiva);
  }

}
