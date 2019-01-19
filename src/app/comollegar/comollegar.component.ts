import { Component } from '@angular/core';

@Component({
  selector: 'app-comollegar',
  templateUrl: './comollegar.component.html',
  styleUrls: ['./comollegar.component.scss']
})
export class ComollegarComponent {

  public lat: Number =  41.762471;
  public lng: Number = 1.935609999999997;

  public indicaciones1 = require('src/assets/indicaciones1.png');
  public indicaciones2 = require('src/assets/indicaciones2.png');
  public indicaciones3 = require('src/assets/indicaciones3.png');
}
