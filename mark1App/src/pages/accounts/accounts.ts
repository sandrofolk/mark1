import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Account } from '../../models/account';
import {Mark1} from "../../providers/mark1";
import {AccountsDetailsPage} from "../accounts-details/accounts-details";
import {AccountsEditPage} from "../accounts-edit/accounts-edit";


@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {
  accounts: Account[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {}

  goToDetails(id: number) {
    this.navCtrl.push(AccountsDetailsPage, {id});
  }

  add() {
    this.navCtrl.push(AccountsEditPage);
  }

  ionViewDidEnter() {
    this.mark1.loadAccounts().subscribe(accounts => {
      this.accounts = accounts;
    })
  }

}
