import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="page-header">
    <h1>Beer!</h1>
  </div>
  <div class="container">
    <keg-list
    [kegList]="kegs"
    (onKegSelect)="kegWasSelected($event)">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("RPM IPA", "Boneyard", 100, 7, 0),
      new Keg("Sculpin", "Ballast Point", 125, 7, 1),
      new Keg("Hef", "Widmer", 100, 6, 2),
      new Keg("Arrogant Bastard", "Stone", 130, 8, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{
    console.log("parent", clickedKeg)
  }
}
