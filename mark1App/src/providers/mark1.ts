import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import { Storage } from '@ionic/storage';
// import { JwtHelper } from 'angular2-jwt';

import { Person } from '../models/person';


export class User {
  name: string;
  email: string;
  key: string;

  constructor(name: string, email: string, key: string) {
    this.name = name;
    this.email = email;
    this.key = key;
  }
}

@Injectable()
export class Mark1 {
  serverUrl = 'https://sandrofolk-mark1.herokuapp.com';
  // serverUrl = 'http://127.0.0.1:8000';

  mark1ApiUrl = this.serverUrl + '/api';
  mark1ApiAuthUrl = this.serverUrl + '/rest-auth';

  currentUser: User;
  // user: string;
  // error: string;
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  // storage: Storage;
  // jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    public http: Http
    // , storage: Storage
  ) {
    // console.log('Hello Mark1 Provider');

    // this.storage = storage;
    // storage.get('profile').then(profile => {
    //   this.user = JSON.parse(profile);
    // }).catch(error => {
    //   console.log(error);
    // });
  }

  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!

        // observer.next(false);

        this.http.post(`${this.mark1ApiAuthUrl}/login/`, JSON.stringify(credentials), { headers: this.contentHeader })
        .map(res => res.json())
        .subscribe(
          data => {
            console.log(data.key)
            // console.log(this.currentUser)
            this.currentUser = new User(credentials.username, '@', data.key);

            this.contentHeader.append('Authorization', 'Token '+data.key);

            // console.log(this.currentUser)
            observer.next(true);
            observer.complete();
          },
          err => {
            observer.next(false);
            observer.complete();
          }
          // data => this.authSuccess(data.key),
          // err => this.error = err
        );

        // let access = (credentials.password === "admin" && credentials.username === "admin");
        // this.currentUser = new User('Simon', 'saimon@devdactic.com');
        // observer.next(access);
        // observer.complete();
      });
    }
  }

  // authSuccess(token) {
  //   this.error = null;
  //   this.storage.set('key', token);
  //   this.user = this.jwtHelper.decodeToken(token);
  //
  // }

  // public register(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     // At this point store the credentials to your backend!
  //     return Observable.create(observer => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //   }
  // }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  // Load all mark1 persons
  load(): Observable<Person[]> {
    return this.http.get(`${this.mark1ApiUrl}/person/`, { headers: this.contentHeader })
      .map(res => <Person[]>res.json());
  }

  // Get mark1 person by providing id
  loadDetails(id: number): Observable<Person> {
    return this.http.get(`${this.mark1ApiUrl}/person/${id}/`, { headers: this.contentHeader })
      .map(res => <Person>(res.json()))
  }

}
