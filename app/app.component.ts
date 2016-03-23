import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="page-header">
    <h1>Beer!</h1>
  </div>
  <div *ngFor="#keg of kegs" class="container">
    <h3 >{{ keg.name }}</h3>
    <h4>Drink Me</h4>
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
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcohol: number, public pints: number){

  }
}
