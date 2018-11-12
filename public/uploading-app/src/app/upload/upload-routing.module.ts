import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from '@app/upload/containers/upload/upload.component';


const routes: Routes = [
  { path: '', component: UploadComponent }
];

export const UploadRouting = RouterModule.forChild(routes);
