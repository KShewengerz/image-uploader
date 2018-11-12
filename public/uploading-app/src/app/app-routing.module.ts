import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'upload', loadChildren: './upload/upload.module#UploadModule' }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false} );
