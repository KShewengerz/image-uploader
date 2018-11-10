import { Component, OnInit } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Credentials } from '@app/home/models/user.interface';

import { tabs, formFields, Tab } from '@app/home/containers/login-signup/login-signup.data';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  
  tabs: Tab[] = tabs;
  formFields: FormlyFieldConfig[] = formFields;
  
  constructor() { }

  ngOnInit() {}
  
  selectTab(index: number): void {
    this.formFields[2].hideExpression = !this.formFields[2].hideExpression;
  }
  
  login(values: Credentials): void {
    console.log('login', values);
  }
  
  signup(values: Credentials): void {
    console.log('signup', values);
  }

}
