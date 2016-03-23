import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>EDIT THE KEG</h3>
      Name: <input [(ngModel)]="keg.name"/><br>
      Brand: <input [(ngModel)]="keg.brand"/><br>
      Price: <input [(ngModel)]="keg.price"/><br>
      ABV: <input [(ngModel)]="keg.alcohol"/><br>
      Pints: <input [(ngModel)]="keg.pints"/>
    </div>
  `

})

export class EditKegDetailsComponent {
  public keg: Keg;
}
