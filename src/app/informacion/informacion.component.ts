import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent {
  public hotel = require('src/assets/hotel.png');
  public casitacolonia = require('src/assets/casitacolonia.png');

}
