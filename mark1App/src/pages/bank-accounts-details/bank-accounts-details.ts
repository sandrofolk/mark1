import { Component } from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';

import { BankAccount } from '../../models/bank_account';
import { Mark1 } from '../../providers/mark1';
import { TranslateService } from "ng2-translate";
import { BankAccountsEditPage } from "../bank-accounts-edit/bank-accounts-edit";


@Component({
  selector: 'page-bank-accounts-details',
  templateUrl: 'bank-accounts-details.html'
})
export class BankAccountsDetailsPage {

  bank_account: BankAccount;
  id: number;
  loading: Loading;
  str = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    private loadingCtrl: LoadingController,
    private mark1: Mark1
  ) {
    this.id = navParams.get('id');

    this.translate.get(
      [
        'app.msgPleaseWait',
        'app.msgShowErrorTitle',
        'app.msgShowErrorButtonOK'
      ])
      .subscribe((res: string[]) => {
        this.str = {
          'msgPleaseWait': res['app.msgPleaseWait'],
          'msgShowErrorTitle': res['app.msgShowErrorTitle'],
          'msgShowErrorButtonOK': res['app.msgShowErrorButtonOK']
        };
      });
  }

  edit(id: number) {
    this.navCtrl.push(BankAccountsEditPage, {"parentPage": this, id});
  }

  delete() {
    this.showLoading();
    this.mark1.deleteBankAccount(this.bank_account).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
          this.navCtrl.pop();
          this.loading.dismiss();
        });
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: this.str['msgPleaseWait']
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: this.str['msgShowErrorTitle'],
      subTitle: text,
      buttons: [this.str['msgShowErrorButtonOK']]
    });
    alert.present(prompt);
  }

  ionViewWillEnter() {
    this.carregaBankAccount();
  }

  carregaBankAccount() {
    this.mark1.loadDetailsBankAccount(this.id).subscribe(bank_account => {
      this.bank_account = bank_account;
    })
  }

}
