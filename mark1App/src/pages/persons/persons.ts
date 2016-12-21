import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Person } from '../../models/person';
import { PersonsDetailsPage } from '../persons-details/persons-details';

import { Mark1 } from '../../providers/mark1';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-persons',
  templateUrl: 'persons.html'
})
export class PersonsPage {
  persons: Person[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {
    mark1.load().subscribe(persons => {
      // console.log(persons)
      this.persons = persons;
    })
  }

  goToDetails(id: number) {
    this.navCtrl.push(PersonsDetailsPage, {id});
  }

  public logout() {
    this.mark1.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PersonsPage');
  // }

}
