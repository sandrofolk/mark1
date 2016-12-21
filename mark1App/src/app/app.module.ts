import { NgModule, ErrorHandler } from '@angular/core';
// import { Http } from '@angular/http';
// import { Storage } from '@ionic/storage';
// import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PersonsPage } from '../pages/persons/persons';
import { PersonsDetailsPage } from '../pages/persons-details/persons-details';

import { Mark1 } from '../providers/mark1';


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
    PersonsDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    PersonsPage,
    PersonsDetailsPage
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
