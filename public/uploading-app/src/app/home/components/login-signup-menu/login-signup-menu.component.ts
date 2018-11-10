import { Component, OnInit } from '@angular/core';

import { Credentials } from '@app/home/models/user.interface';


@Component({
  selector: 'app-login-signup-menu',
  templateUrl: './login-signup-menu.component.html',
  styleUrls: ['./login-signup-menu.component.scss']
})
export class LoginSignupMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  login(values: Credentials): void {
    console.log('login', values);
  }
  
  signup(values: Credentials): void {
    console.log('signup', values);
  }

}
