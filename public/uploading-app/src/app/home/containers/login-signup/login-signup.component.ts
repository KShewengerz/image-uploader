import { Component, OnInit } from '@angular/core';

import { Credentials } from '@app/home/models/user.interface';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  login(values: Credentials): void {
    console.log('login', values);
  }
  
  signup(values: Credentials): void {
    console.log('signup', values);
  }

}
