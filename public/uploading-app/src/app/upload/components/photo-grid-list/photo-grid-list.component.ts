import { Component, OnInit } from '@angular/core';

import { UploadService } from '@app/upload/services/upload.service';

import { animations } from '@app/upload/components/photo-grid-list/photo-grid-list.animations';


@Component({
  selector: 'app-photo-grid-list',
  templateUrl: './photo-grid-list.component.html',
  styleUrls: ['./photo-grid-list.component.scss'],
  animations: [ animations.listStaggerTrigger ]
})
export class PhotoGridListComponent implements OnInit {
  
  images: string[] = [];
  
  constructor(private uploadService: UploadService) { }
  
  ngOnInit(): void {
    this.fetchImages();
  }
  
  fetchImages() {
    this.uploadService
      .getPhotos()
      .subscribe(images => this.images = images);
  }

}
