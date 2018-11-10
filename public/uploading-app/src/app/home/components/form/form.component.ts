import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Credentials } from '@app/home/models/user.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() type: string;
  @Output() submitted: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  
  constructor() { }

  ngOnInit() {}

}
