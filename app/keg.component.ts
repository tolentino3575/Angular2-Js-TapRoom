import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <ul>{{ keg.name }}
      <li>{{ keg.brand }}</li>
      <li>{{ keg.price }}</li>
      <li>{{ keg.alcohol }}</li>
      <li>{{ keg.pints }}</li>
    </ul>
  `
})

export class KegComponent {
  public keg: Keg;
}
