import { NgModule } from '@angular/core';

import { MatCardModule, MatTabsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';


@NgModule({
  exports: [
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class HomeMaterialModule {}
