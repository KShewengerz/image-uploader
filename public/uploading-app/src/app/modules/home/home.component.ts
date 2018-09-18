import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
