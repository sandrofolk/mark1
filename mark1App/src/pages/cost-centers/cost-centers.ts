import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CostCenter} from "../../models/cost_center";
import {Mark1} from "../../providers/mark1";
import {CostCentersDetailsPage} from "../cost-centers-details/cost-centers-details";
import {CostCentersEditPage} from "../cost-centers-edit/cost-centers-edit";

/*
  Generated class for the CostCenters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cost-centers',
  templateUrl: 'cost-centers.html'
})
export class CostCentersPage {

  cost_centers: CostCenter[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {}

  goToDetails(id: number) {
    this.navCtrl.push(CostCentersDetailsPage, {id});
  }

  add() {
    this.navCtrl.push(CostCentersEditPage);
  }

  ionViewDidEnter() {
    this.mark1.loadCostCenters().subscribe(cost_centers => {
      this.cost_centers = cost_centers;
    })
  }

}
