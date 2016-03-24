import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <h1>Keg Inventory</h1>
  <keg-display *ngFor="#currentKeg of kegList"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
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
    // console.log("childClicked", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: any[]): void {
    this.kegList.push(
      new Keg(newKeg[0], newKeg[1], newKeg[2], newKeg[3], this.kegList.length)
    );
  }
}
