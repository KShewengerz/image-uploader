import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from '@app/upload/models/interfaces/video.interface';


@Component({
  selector    : 'app-video-grid-list',
  templateUrl : './video-grid-list.component.html',
  styleUrls   : ['./video-grid-list.component.scss']
})
export class VideoGridListComponent {
  
  gridListOptions = { cols: 3, rowHeight: '280px', gutterSize: '20px' };
  gridRowColSpan: number  = 1;
  videoWidth: string = '400';
  
  videos: Video[] = this.route.snapshot.data.videos;

  constructor(private route: ActivatedRoute) {}

}
