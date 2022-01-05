import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:any |null=localStorage.getItem('email');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  isNotLogIn(){
    return !!localStorage.getItem('email');
  }

  isLogIn(){
    return !localStorage.getItem('email');
  }

}
