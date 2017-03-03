import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {TranslateService} from 'ng2-translate';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PersonsPage } from '../pages/persons/persons';
import { BanksPage } from '../pages/banks/banks';
import { CategoriesPage } from '../pages/categories/categories';
import { BankAccountsPage } from '../pages/bank-accounts/bank-accounts';
import { CostCentersPage } from '../pages/cost-centers/cost-centers'

import { Mark1 } from '../providers/mark1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  homeStr: string;

  constructor(public platform: Platform, public menu: MenuController, public translate: TranslateService, private mark1: Mark1) {
    this.initializeApp();

    this.translateConfig();

    this.translate.get([
      'menu.home', 'menu.persons', 'menu.banks', 'menu.categories', 'menu.bank_accounts', 'menu.cost_centers'
    ]).subscribe((res: string[]) => {
      this.pages = [
        { title: res['menu.home'], component: HomePage },
        { title: res['menu.persons'], component: PersonsPage },
        { title: res['menu.banks'], component: BanksPage },
        { title: res['menu.categories'], component: CategoriesPage },
        { title: res['menu.bank_accounts'], component: BankAccountsPage },
        { title: res['menu.cost_centers'], component: CostCentersPage }
      ];
    });

  }

  translateConfig() {
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(en|pt)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(userLang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.menu.enable(false, 'menu')
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public logout() {
    this.mark1.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}
