import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <dl>
      <dt>{{ keg.name }}</dt>
      <dd>Brand: {{ keg.brand }}</dd>
      <dd>Price Per Keg: $ {{ keg.price }}</dd>
      <dd>Alcohol Content: {{ keg.alcohol }} %</dd>
      <dd>Pints in Keg: {{ keg.pints }}</dd>
    </dl>
  `
})

export class KegComponent {
  public keg: Keg;
}
