import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'sell-pint',
  template: `
    <div>
    <button (click)="sellPint()">Sell a Pint</button>
    </div>
  `
})

export class SellPintComponent {
  sellPint(){
    var sellPint = keg.pints -1;
  }
}
