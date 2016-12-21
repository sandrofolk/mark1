import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Person } from '../../models/person';

import { Mark1 } from '../../providers/mark1';

@Component({
  selector: 'page-persons-details',
  templateUrl: 'persons-details.html'
})
export class PersonsDetailsPage {
  person: Person;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {
    this.id = navParams.get('id');
    mark1.loadDetails(this.id).subscribe(person => {
      this.person = person;
      // console.log(base)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonsDetailsPage');
  }

}
