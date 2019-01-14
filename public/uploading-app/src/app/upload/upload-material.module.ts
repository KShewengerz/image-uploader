import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTabsModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule
  ]
})
export class UploadMaterialModule {}
