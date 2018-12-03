import { Component } from '@angular/core';


@Component({
  selector: 'app-photo-grid-list',
  templateUrl: './photo-grid-list.component.html',
  styleUrls: ['./photo-grid-list.component.scss']
})
export class PhotoGridListComponent {
  
  baseImageUrl: string = 'https://s3.amazonaws.com/sample-v1';
  
  imageLinks: string[] = [
    `${this.baseImageUrl}/architecture.jpg`,
    `${this.baseImageUrl}/boat.jpg`,
    `${this.baseImageUrl}/bonding.jpg`,
    `${this.baseImageUrl}/books.jpg`,
    `${this.baseImageUrl}/family.jpg`,
    `${this.baseImageUrl}/overlooking.jpg`,
    `${this.baseImageUrl}/overview.jpg`,
    `${this.baseImageUrl}/river.jpg`,
    `${this.baseImageUrl}/rocks.jpg`,
    `${this.baseImageUrl}/wedding.jpg`
  ];
  
  constructor() { }

}
