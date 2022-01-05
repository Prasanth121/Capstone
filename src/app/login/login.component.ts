import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/messages';
import { LoginUser } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginUser;
  isError: boolean = false;
  errMessage: string = '';

  constructor(private us: UserService, private router: Router) {
    this.user = { 'email': '', 'password': '' };
  }

  ngOnInit(): void {
  }

  login() {
    let cuser = this.user;
    let that = this;
    this.us.checkLogin(this.user)
      .subscribe({
        next(data: Message) {
          console.log('next call');
          console.log(data.message);
          localStorage.setItem('email', cuser.email);
          that.router.navigate(['room']);
        },
        error(data) {
          console.log('error call');
          console.log(data.error);
          that.isError = true;
          that.errMessage = data.error.description;
          console.log(that.errMessage);
        }
      });

  }

}