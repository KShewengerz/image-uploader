import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMaterialModule } from '@app/home/home-material.module';

import { HomeComponent } from '@app/home/containers/home/home.component';
import { LoginSignupComponent } from './containers/login-signup/login-signup.component';
import { FormComponent } from '@app/home/components/form/form.component';

import { HomeRouting } from '@app/home/home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HomeMaterialModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent,
    FormComponent,
    LoginSignupComponent
  ],
})
export class HomeModule { }
