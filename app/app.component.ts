import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `

  <div class="page-header">
    <h1>Yvonna & Erik's Saloon</h1>
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
      new Keg("RPM IPA", "Boneyard", 7, 7, 0),
      new Keg("Sculpin", "Ballast Point", 10, 7, 1),
      new Keg("Hef", "Widmer", 5, 6, 2),
      new Keg("Arrogant Bastard", "Stone", 10, 8, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{
    // console.log("parent", clickedKeg)
  }
}
