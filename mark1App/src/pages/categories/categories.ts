import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Category } from '../../models/category';
import {Mark1} from "../../providers/mark1";
import {CategoriesDetailsPage} from "../categories-details/categories-details";
import {CategoriesEditPage} from "../categories-edit/categories-edit";


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  categories: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mark1: Mark1) {}

  goToDetails(id: number) {
    this.navCtrl.push(CategoriesDetailsPage, {id});
  }

  add() {
    this.navCtrl.push(CategoriesEditPage);
  }

  ionViewDidEnter() {
    this.mark1.loadCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

}
