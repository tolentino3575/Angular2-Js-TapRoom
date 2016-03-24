import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'sell-pint',
  inputs: ['pintSold'],
  template: `
    <div>
    <button (click)="sellPint()">Sell a Pint</button>
    </div>
  `
})

export class SellPintComponent {
  public pintSold: Keg;
  sellPint() {
     this.pintSold.pints --;
  }
}
