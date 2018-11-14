import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component
import { HomeComponent } from '@app/home/containers/home/home.component';
import { LoginSignupComponent } from '@app/home/components/login-signup/login-signup.component';

// Modules
import { SharedModule } from '@app/shared/shared.module';
import { HomeMaterialModule } from '@app/home/home-material.module';
import { HomeRouting } from '@app/home/home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    HomeMaterialModule,
    SharedModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent,
    LoginSignupComponent
  ],
})
export class HomeModule { }
