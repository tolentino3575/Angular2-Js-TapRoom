import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { RemainingPintsPipe } from './remaining-pints.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [RemainingPintsPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <h1>Keg Inventory</h1>
  <select (change)="onChange($event.target.value)">
    <option value="All">Show All</option>
    <option value="Low">Show Kegs Running Low</option>
    <option value="Full" selected="selected">Show Kegs With TONS of Beer</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | low:filterLow"
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
  public filterLow: string = "Low";
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
  onChange(filterOption){
    this.filterLow = filterOption;
    console.log(this.filterLow);
  }
}
