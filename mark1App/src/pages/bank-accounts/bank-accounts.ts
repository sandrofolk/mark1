import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BankAccount } from '../../models/bank_account';
import { Mark1 } from "../../providers/mark1";
import { BankAccountsDetailsPage } from "../bank-accounts-details/bank-accounts-details";
import { BankAccountsEditPage } from "../bank-accounts-edit/bank-accounts-edit";


@Component({
  selector: 'page-bank-accounts',
  templateUrl: 'bank-accounts.html'
})
export class BankAccountsPage {
  bank_accounts: BankAccount[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {}

  goToDetails(id: number) {
    this.navCtrl.push(BankAccountsDetailsPage, {id});
  }

  add() {
    this.navCtrl.push(BankAccountsEditPage);
  }

  ionViewDidEnter() {
    this.mark1.loadBankAccounts().subscribe(bank_accounts => {
      this.bank_accounts = bank_accounts;
    })
  }

}
