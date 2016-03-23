import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="page-header">
    <h1>Beer!</h1>
  </div>
  <div class="container">
    <h3 *ngFor="#keg of kegs" (click)="kegWasSelected(keg)">
      Name: {{ keg.name }}<br>
      Brand: {{ keg.brand }}<br>
      Price: $ {{ keg.price }}<br>
      Alcohol level: {{ keg.alcohol }}<br>
      Amount: {{ keg.pints }} pints</h3>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("RPM IPA", "Boneyard", 100, 7, 124),
      new Keg("Sculpin", "Ballast Point", 125, 7, 124),
      new Keg("Hef", "Widmer", 100, 6, 124),
      new Keg("Arrogant Bastard", "Stone", 130, 8, 124)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{
    console.log(clickedKeg)
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcohol: number, public pints: number){

  }
}
