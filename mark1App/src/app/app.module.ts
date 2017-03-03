import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import {TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {Http} from "@angular/http";

import { MyApp } from './app.component';

import { Mark1 } from '../providers/mark1';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { PersonsPage } from '../pages/persons/persons';
import { PersonsDetailsPage } from '../pages/persons-details/persons-details';
import { PersonsEditPage } from '../pages/persons-edit/persons-edit';

import { BanksPage } from "../pages/banks/banks";
import { BanksDetailsPage } from "../pages/banks-details/banks-details";
import { BanksEditPage } from "../pages/banks-edit/banks-edit";

import { CategoriesPage } from "../pages/categories/categories";
import { CategoriesDetailsPage } from "../pages/categories-details/categories-details";
import { CategoriesEditPage } from "../pages/categories-edit/categories-edit";

import { BankAccountsPage } from "../pages/bank-accounts/bank-accounts";
import { BankAccountsDetailsPage } from "../pages/bank-accounts-details/bank-accounts-details";
import { BankAccountsEditPage } from "../pages/bank-accounts-edit/bank-accounts-edit";

import { CostCentersPage } from "../pages/cost-centers/cost-centers";
import { CostCentersDetailsPage } from "../pages/cost-centers-details/cost-centers-details";
import { CostCentersEditPage } from "../pages/cost-centers-edit/cost-centers-edit";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    PersonsPage,
    PersonsDetailsPage,
    PersonsEditPage,
    BanksPage,
    BanksDetailsPage,
    BanksEditPage,
    CategoriesPage,
    CategoriesDetailsPage,
    CategoriesEditPage,
    BankAccountsPage,
    BankAccountsDetailsPage,
    BankAccountsEditPage,
    CostCentersPage,
    CostCentersDetailsPage,
    CostCentersEditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    PersonsPage,
    PersonsDetailsPage,
    PersonsEditPage,
    BanksPage,
    BanksDetailsPage,
    BanksEditPage,
    CategoriesPage,
    CategoriesDetailsPage,
    CategoriesEditPage,
    BankAccountsPage,
    BankAccountsDetailsPage,
    BankAccountsEditPage,
    CostCentersPage,
    CostCentersDetailsPage,
    CostCentersEditPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Mark1
  ]
})
export class AppModule {}
