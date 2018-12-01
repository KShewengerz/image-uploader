import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class UploadMaterialModule {}
