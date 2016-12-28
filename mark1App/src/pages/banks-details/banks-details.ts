import { Component } from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';

import { Bank } from '../../models/bank';
import { Mark1 } from '../../providers/mark1';
import {TranslateService} from "ng2-translate";
import {BanksEditPage} from "../banks-edit/banks-edit";


@Component({
  selector: 'page-banks-details',
  templateUrl: 'banks-details.html'
})
export class BanksDetailsPage {

  bank: Bank;
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
    this.navCtrl.push(BanksEditPage, {"parentPage": this, id});
  }

  delete() {
    this.showLoading();
    this.mark1.deleteBank(this.bank).subscribe(allowed => {
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

  // ionViewDidEnter() {
  //   this.carregaPerson();
  // }

  ionViewWillEnter() {
    this.carregaBank();
  }

  carregaBank() {
    this.mark1.loadDetailsBank(this.id).subscribe(bank => {
      this.bank = bank;
    })
  }

}
