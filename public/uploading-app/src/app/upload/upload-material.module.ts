import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTabsModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule
  ]
})
export class UploadMaterialModule {}
