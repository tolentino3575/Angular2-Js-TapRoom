import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>EDIT THE KEG</h3>
      <h4>Name: <input [(ngModel)]="keg.name"/></h4><br>
      <h4>Brand: <input [(ngModel)]="keg.brand"/></h4><br>
      <h4>Price: <input [(ngModel)]="keg.price"/></h4><br>
      <h4>ABV: <input [(ngModel)]="keg.alcohol"/></h4><br>
      <h4>Pints: <input [(ngModel)]="keg.pints"/></h4>
    </div>
  `

})

export class EditKegDetailsComponent {
  public keg: Keg;
}
