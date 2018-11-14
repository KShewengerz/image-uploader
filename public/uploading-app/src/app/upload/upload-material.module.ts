import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatProgressBarModule, MatMenuModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule
  ]
})
export class UploadMaterialModule {}
