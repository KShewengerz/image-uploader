import { Component, OnInit } from '@angular/core';

import { animations } from '@app/home/containers/home/home.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ animations.slideDownOpacityTrigger ]
})
export class HomeComponent implements OnInit {

  ngOnInit() {}

}
