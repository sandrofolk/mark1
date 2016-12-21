import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, MenuController } from 'ionic-angular';

import { Mark1 } from '../../providers/mark1';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  // registerCredentials = {username: '', password: ''};
  registerCredentials = {username: 'demo', password: 'demodemo'};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mark1: Mark1,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public menu: MenuController
  ) {}

  public login() {
    this.showLoading()
    this.mark1.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.navCtrl.setRoot(HomePage);
        this.menu.enable(true, 'menu')
        });
      } else {
        this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false, 'menu');
  }

}
