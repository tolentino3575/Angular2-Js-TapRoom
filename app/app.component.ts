import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{ keg.name }}</h3>
  `
})

export class KegComponent {
  public keg: Keg;
}

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}

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
      new Keg("RPM IPA", "Boneyard", 100, 7, 124),
      new Keg("Sculpin", "Ballast Point", 125, 7, 124),
      new Keg("Hef", "Widmer", 100, 6, 124),
      new Keg("Arrogant Bastard", "Stone", 130, 8, 124)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{
    console.log("parent", clickedKeg)
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcohol: number, public pints: number){

  }
}
