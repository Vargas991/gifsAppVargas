import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent  {

  @Input() paises: Pais[]=[];
  constructor() { }

}
