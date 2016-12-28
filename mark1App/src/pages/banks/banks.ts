import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Bank } from '../../models/bank';
import {Mark1} from "../../providers/mark1";
import {BanksDetailsPage} from "../banks-details/banks-details";
import {BanksEditPage} from "../banks-edit/banks-edit";


@Component({
  selector: 'page-banks',
  templateUrl: 'banks.html'
})
export class BanksPage {
  banks: Bank[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {}

  goToDetails(id: number) {
    this.navCtrl.push(BanksDetailsPage, {id});
  }

  add() {
    this.navCtrl.push(BanksEditPage);
  }

  ionViewDidEnter() {
    this.mark1.loadBanks().subscribe(banks => {
      this.banks = banks;
    })
  }

}
