import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../model/messages';
import { LoginUser } from '../model/user';
import { UserDetails } from '../model/userdetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8080/';

  constructor(private router: Router, private http: HttpClient) { }

  isLoggedIn() {
    return !!localStorage.getItem('email');
  }

  userRegister(userDetails: UserDetails): Observable<Message> {
    console.log(userDetails);
    return this.http.post<Message>(this.url + 'register', userDetails);
  }

  checkLogin(user: LoginUser): Observable<Message> {
    return this.http.post<Message>(
      this.url + 'authenticate', user);
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
