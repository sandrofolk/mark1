import { Component } from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';

import {Mark1} from "../../providers/mark1";
import {TranslateService} from "ng2-translate";
import {Bank} from "../../models/bank";


@Component({
  selector: 'page-banks-edit',
  templateUrl: 'banks-edit.html'
})
export class BanksEditPage {

  bank: Bank = <Bank>({});
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
    if (this.id) {
      mark1.loadDetailsBank(this.id).subscribe(bank => {
        this.bank = bank;
      })
    }

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

  post() {
    this.showLoading();
    this.mark1.postBank(this.bank).subscribe(allowed => {
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

}
