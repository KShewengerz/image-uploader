import { Component, OnInit, ViewChild } from '@angular/core';

import { FormComponent } from '@app/home/components/form/form.component';

import { Credentials } from '@app/home/models/user.interface';

import { tabs, Tab } from '@app/home/containers/login-signup/login-signup.data';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  
  @ViewChild(FormComponent) formComponent: FormComponent;
  
  tabs: Tab[] = tabs;
  
  constructor() { }

  ngOnInit() {}
  
  selectTab(index: number): void {
    this.formComponent.form.reset();
  }
  
  login(values: Credentials): void {
    console.log('login', values);
  }
  
  signup(values: Credentials): void {
    console.log('signup', values);
  }

}
