import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from '@app/upload/containers/upload/upload.component';
import { PhotoGridListComponent } from '@app/upload/components/photo-grid-list/photo-grid-list.component';
import { VideoGridListComponent } from '@app/upload/components/video-grid-list/video-grid-list.component';


const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'photos' },
      { path: 'photos', component: PhotoGridListComponent },
      { path: 'videos', component: VideoGridListComponent }
    ]
  }
];

export const UploadRouting = RouterModule.forChild(routes);
