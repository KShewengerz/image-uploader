import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMaterialModule } from '@app/home/home-material.module';

import { HomeComponent } from '@app/home/containers/home/home.component';
import { FormComponent } from '@app/home/components/form/form.component';

import { HomeRouting } from '@app/home/home-routing.module';
import { LoginSignupMenuComponent } from './components/login-signup-menu/login-signup-menu.component';


@NgModule({
  imports: [
    CommonModule,
    HomeMaterialModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent,
    FormComponent,
    LoginSignupMenuComponent
  ],
})
export class HomeModule { }
