import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h4>Blank</h4>
    <input placeholder="Beer Name" class="col-sm-8 input-lg" #newUserName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newUserBrand>
    <input placeholder="Keg Price" class="col-sm-8 input-lg" #newUserPrice>
    <input placeholder="ABV" class="col-sm-8 input-lg" #newUserAlcoholContent>
    <button (click)="addKeg(newUserName, newUserBrand, newUserPrice, newUserAlcoholContent)">Add</button>
  </div>
  `
})

export class NewKegComponent{
  public onSubmitNewKeg: EventEmitter<any[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newUserName: HTMLInputElement, newUserBrand: HTMLInputElement, newUserPrice: HTMLInputElement, newUserAlcoholContent: HTMLInputElement){

    var newKeg = [newUserName.value, newUserBrand.value, parseInt(newUserPrice.value), parseInt(newUserAlcoholContent.value)];

    this.onSubmitNewKeg.emit(newKeg);
    newUserName.value="";
    newUserBrand.value="";
    newUserPrice.value="";
    newUserAlcoholContent.value="";
    // console.log(newKeg);
  }
}
