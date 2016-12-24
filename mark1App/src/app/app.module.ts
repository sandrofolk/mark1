import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PersonsPage } from '../pages/persons/persons';
import { PersonsDetailsPage } from '../pages/persons-details/persons-details';
import { PersonsEditPage } from '../pages/persons-edit/persons-edit';

import { Mark1 } from '../providers/mark1';
import {TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {Http} from "@angular/http";


// let storage = new Storage();
//
// export function getAuthHttp(http) {
//   return new AuthHttp(new AuthConfig({
//     headerPrefix: 'mk1',
//     noJwtError: true,
//     globalHeaders: [{'Accept': 'application/json'}],
//     tokenGetter: (() => storage.get('id_token')),
//   }), http);
// }

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    PersonsPage,
    PersonsDetailsPage,
    PersonsEditPage
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
    PersonsEditPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Mark1
    // , Storage, AUTH_PROVIDERS,
    // {
    //   provide: AuthHttp,
    //   useFactory: getAuthHttp,
    //   deps: [Http]
    // }
  ]
})
export class AppModule {}
