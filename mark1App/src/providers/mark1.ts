import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Person } from '../models/person';


export class User {
  name: string;
  key: string;

  constructor(name: string, key: string) {
    this.name = name;
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
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});

  constructor(
    public http: Http
  ) {}

  public login(credentials, str) {
    if (credentials.username === '' || credentials.password === '') {
      return Observable.throw(str['msgGetCredentials']);
    } else {
      return Observable.create(observer => {
        this.http.post(`${this.mark1ApiAuthUrl}/login/`, JSON.stringify(credentials), { headers: this.contentHeader })
        .map(res => res.json())
        .subscribe(
          data => {
            this.currentUser = new User(credentials.username, data.key);

            this.contentHeader.set('Authorization', 'Token '+data.key);

            observer.next(true);
            observer.complete();
          },
          err => {
            observer.next(false);
            observer.complete();
          }
        );
      });
    }
  }

  public postPerson(person) {
    return Observable.create(observer => {
        if (person.id)
        {
          this.http.put(`${this.mark1ApiUrl}/person/${person.id}/`, JSON.stringify(person), {headers: this.contentHeader})
            .map(res => res.json())
            .subscribe(
              data => {
                observer.next(true);
                observer.complete();
              },
              err => {
                observer.next(false);
                observer.complete();
              }
            );
        } else {
          this.http.post(`${this.mark1ApiUrl}/person/`, JSON.stringify(person), {headers: this.contentHeader})
            .map(res => res.json())
            .subscribe(
              data => {
                observer.next(true);
                observer.complete();
              },
              err => {
                observer.error(err._body)
                // observer.next(false);
                observer.complete();
              }
            );
        }
      }
    )
  }

  public deletePerson(person) {
    return Observable.create(observer => {

        this.http.delete(`${this.mark1ApiUrl}/person/${person.id}/`, {headers: this.contentHeader})
          .map(res => res.json())
          .subscribe(
            data => {
              observer.next(true);
              observer.complete();
            },
            err => {
              observer.next(false);
              observer.complete();
            }
          );
      }
    )
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.contentHeader.delete('Authorization');
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
