import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, RoutesRecognized } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Pais, Translations } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent  implements OnInit
{

  pais!: Pais;
  traducciones!: Translations;
  constructor( 
          private activateRoute :ActivatedRoute,
          private paisService : PaisService
          ) { }
  
  ngOnInit(): void {
        this.activateRoute.params
          .pipe( 
            switchMap( ({id}) =>  this.paisService.buscarPaisAlpha(id) ),
            tap(console.log)
          )
          .subscribe( pais => {
                    this.pais = pais;
                    this.traducciones = this.pais.translations;
          },error =>{
                
             console.log(error);
                
          } );
              
           
              /* //Otra Forma para subscribirme al Obsevable 
                // this.paisService.buscarPaisAlpha(id)
                //   .subscribe(resp=>{
                //     console.log(resp);
                //     // this.pais = resp;
                //   } );       */
  }

  

}
