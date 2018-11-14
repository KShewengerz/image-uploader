import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatProgressBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class UploadMaterialModule {}
