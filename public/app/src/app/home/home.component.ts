import { Component, OnInit } from "@angular/core";

@Component({
  moduleId    : module.id,
  selector    : "mu-home",
  templateUrl : "home.component.html",
  styleUrls   : ["home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Home component works!");
  }

}
