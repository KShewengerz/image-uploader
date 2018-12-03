import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Tab } from '@app/upload/containers/media/media.model';


@Component({
  selector    : 'app-media',
  templateUrl : './media.component.html',
  styleUrls   : ['./media.component.scss']
})
export class MediaComponent {
  
  tabs: Tab[] = [
    { path: 'photos', label: 'Photos' },
    { path: 'videos', label: 'Videos' }
  ];
  
  constructor(private router: Router) {}

}
