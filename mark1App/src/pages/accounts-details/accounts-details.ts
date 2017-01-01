import { Component } from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';

import { Account } from '../../models/account';
import { Mark1 } from '../../providers/mark1';
import {TranslateService} from "ng2-translate";
import {AccountsEditPage} from "../accounts-edit/accounts-edit";


@Component({
  selector: 'page-accounts-details',
  templateUrl: 'accounts-details.html'
})
export class AccountsDetailsPage {

  account: Account;
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
    this.navCtrl.push(AccountsEditPage, {"parentPage": this, id});
  }

  delete() {
    this.showLoading();
    this.mark1.deleteAccount(this.account).subscribe(allowed => {
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
    this.carregaAccount();
  }

  carregaAccount() {
    this.mark1.loadDetailsAccount(this.id).subscribe(account => {
      this.account = account;
    })
  }

}
