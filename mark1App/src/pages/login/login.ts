import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, MenuController } from 'ionic-angular';

import { Mark1 } from '../../providers/mark1';
import { HomePage } from '../home/home';
import {TranslateService} from "ng2-translate";
// import {PersonsPage} from "../persons/persons";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  // registerCredentials = {username: '', password: ''};
  registerCredentials = {username: 'demo', password: 'demodemo'}; //TODO: Apenas para testes
  str = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mark1: Mark1,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public menu: MenuController,
    public translate: TranslateService
  ) {
    // this.login(); // TODO: Apenas para testes
  }

  public login() {
    this.translate.get(
      [
        'login.msgGetCredentials',
        'login.msgAccessDenied',
        'app.msgPleaseWait',
        'app.msgShowErrorTitle',
        'app.msgShowErrorButtonOK'
      ])
      .subscribe((res: string[]) => {
      this.str = {
        'msgGetCredentials': res['login.msgGetCredentials'],
        'msgAccessDenied': res['login.msgAccessDenied'],
        'msgPleaseWait': res['app.msgPleaseWait'],
        'msgShowErrorTitle': res['app.msgShowErrorTitle'],
        'msgShowErrorButtonOK': res['app.msgShowErrorButtonOK']
      };

      this.showLoading();

      this.mark1.login(this.registerCredentials, this.str).subscribe(allowed => {
        if (allowed) {
          setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
          // this.navCtrl.setRoot(PersonsPage); // TODO: Apenas para testes
          this.menu.enable(true, 'menu');
          });
        } else {
          this.showError(this.str['msgAccessDenied']);
        }
      },
      error => {
        this.showError(error);
      });
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

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false, 'menu');
  }

}
