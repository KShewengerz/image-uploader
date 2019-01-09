import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { tap } from 'rxjs/operators';

import { Photo } from '@app/upload/models/interfaces/photo.interface';

import { animations } from '@app/upload/components/photo-grid-list/photo-grid-list.animations';


@Component({
  selector: 'app-photo-grid-list',
  templateUrl: './photo-grid-list.component.html',
  styleUrls: ['./photo-grid-list.component.scss'],
  animations: [ animations.listStaggerTrigger ]
})
export class PhotoGridListComponent implements OnInit {
  
  photos: Photo[] = this.route.snapshot.data.photos;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void { }
  
  fetchPhotos(): void {
    // this.route
    //  .data
    //  .pipe(
    //    tap(data => console.log(data))
    //  )
    //  .subscribe(data => console.log(data));
  }

}
