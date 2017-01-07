import {Component} from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';

import { CostCenter } from '../../models/cost_center';

import { Mark1 } from '../../providers/mark1';
import { CostCentersEditPage } from "../cost-centers-edit/cost-centers-edit";
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'page-cost-centers-details',
  templateUrl: 'cost-centers-details.html'
})
export class CostCentersDetailsPage {

  cost_center: CostCenter;
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
    this.navCtrl.push(CostCentersEditPage, {"parentPage": this, id});
  }

  delete() {
    this.showLoading();
    this.mark1.deleteCostCenter(this.cost_center).subscribe(allowed => {
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
    this.carregaCostCenter();
  }

  carregaCostCenter() {
    this.mark1.loadDetailsCostCenter(this.id).subscribe(cost_center => {
      this.cost_center = cost_center;
    })
  }

}
