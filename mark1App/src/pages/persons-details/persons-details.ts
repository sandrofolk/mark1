import {Component} from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';

import { Person } from '../../models/person';

import { Mark1 } from '../../providers/mark1';
import {PersonsEditPage} from "../persons-edit/persons-edit";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'page-persons-details',
  templateUrl: 'persons-details.html'
})
export class PersonsDetailsPage {
  person: Person;
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
    this.navCtrl.push(PersonsEditPage, {"parentPage": this, id});
  }

  delete() {
    this.showLoading();
    this.mark1.deletePerson(this.person).subscribe(allowed => {
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
    this.carregaPerson();
  }

  carregaPerson() {
    this.mark1.loadDetails(this.id).subscribe(person => {
      this.person = person;
    })
  }

}
