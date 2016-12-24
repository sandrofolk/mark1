import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Mark1 } from '../../providers/mark1';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  param = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {
    let info = this.mark1.getUserInfo();
    this.username = info.name;
    this.param = {username: this.username};
  }

  public logout() {
    this.mark1.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }

}
