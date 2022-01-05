import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/messages';
import { UserDetails } from '../model/userdetails';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserDetails;
  isError: boolean = false;
  errMessage: string = '';

  constructor(private us: UserService, private router: Router) {
    this.user = { 'firstname': '', 'lastname': '', 'email': '', 'phone': '', 'address': '', 'password': '', 'confirm_password': '' };
  }

  ngOnInit(): void {
  }

  register() {
    let that = this;
    this.us.userRegister(this.user)
      .subscribe({
        next(data: Message) {
          console.log(data.message);
          that.router.navigate(['login']);
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
