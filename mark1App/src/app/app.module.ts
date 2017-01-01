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

import {BanksPage} from "../pages/banks/banks";
import {BanksDetailsPage} from "../pages/banks-details/banks-details";
import {BanksEditPage} from "../pages/banks-edit/banks-edit";

import {CategoriesPage} from "../pages/categories/categories";
import {CategoriesDetailsPage} from "../pages/categories-details/categories-details";
import {CategoriesEditPage} from "../pages/categories-edit/categories-edit";

import {AccountsPage} from "../pages/accounts/accounts";
import {AccountsDetailsPage} from "../pages/accounts-details/accounts-details";
import {AccountsEditPage} from "../pages/accounts-edit/accounts-edit";


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
    AccountsPage,
    AccountsDetailsPage,
    AccountsEditPage
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
    AccountsPage,
    AccountsDetailsPage,
    AccountsEditPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Mark1
  ]
})
export class AppModule {}
