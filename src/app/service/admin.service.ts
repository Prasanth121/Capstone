import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../model/messages';
import { LoginUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = 'http://localhost:8080/';

  constructor(private router: Router, private http: HttpClient) { }

  isLoggedIn() {
    return !!localStorage.getItem('email');
  }

  checkLogin(user: LoginUser): Observable<Message> {
    console.log(user);
    return this.http.post<Message>(this.url + 'adminAuthenticate', user);
  }
}
