import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';

import { AppRouting } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
