import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({
        'opacity': 0,
        'transform': 'translateY(-5%)'
      })),
      transition('* <=> void', animate('1000ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  ngOnInit() {}

}
