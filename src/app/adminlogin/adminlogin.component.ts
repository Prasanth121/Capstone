import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/messages';
import { LoginUser } from '../model/user';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  user: LoginUser;
  isError: boolean = false;
  errMessage: string = '';

  constructor(private as: AdminService, private router: Router) {
    this.user = { 'email': '', 'password': '' };
  }

  ngOnInit(): void {
  }

  adminLogin() {
    let cuser = this.user;
    let that = this;
    this.as.checkLogin(this.user)
      .subscribe({
        next(data: Message) {
          console.log('next call');
          console.log(data.message);
          localStorage.setItem('email', cuser.email);
          that.router.navigate(['ownerdashboard']);
        },
        error(data:any) {
          console.log('error call');
          console.log(data.error);
          that.isError = true;
          that.errMessage = data.error.description;
          console.log(that.errMessage);
        }
      });


  }

}
