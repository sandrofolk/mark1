import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Person } from '../../models/person';
import { PersonsDetailsPage } from '../persons-details/persons-details';
import { PersonsEditPage } from '../persons-edit/persons-edit';

import { Mark1 } from '../../providers/mark1';


@Component({
  selector: 'page-persons',
  templateUrl: 'persons.html'
})
export class PersonsPage {
  persons: Person[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {}

  goToDetails(id: number) {
    this.navCtrl.push(PersonsDetailsPage, {id});
  }

  add() {
    this.navCtrl.push(PersonsEditPage);
  }

  ionViewDidEnter() {
    this.mark1.load().subscribe(persons => {
      this.persons = persons;
    })
  }

}
