import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { UploadComponent } from '@app/upload/containers/upload/upload.component';
import { MediaComponent } from '@app/upload/containers/media/media.component';

// Components
import { PhotoGridListComponent } from '@app/upload/components/photo-grid-list/photo-grid-list.component';
import { VideoGridListComponent } from '@app/upload/components/video-grid-list/video-grid-list.component';
import { UploadListComponent } from '@app/upload/components/upload-list/upload-list.component';
import { FileManagerComponent } from '@app/upload/components/file-manager/file-manager.component';
import { EditProfileFormComponent } from '@app/upload/components/edit-profile-form/edit-profile-form.component';

// Directives
import { FileManagerDirective } from '@app/upload/components/file-manager/file-manager.directive';

// Modules
import { UploadMaterialModule } from '@app/upload/upload-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { UploadRouting } from '@app/upload/upload-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    UploadMaterialModule,
    SharedModule,
    UploadRouting
  ],
  declarations: [
    //Containers
    UploadComponent,
    EditProfileFormComponent,
    MediaComponent,
    // Components
    PhotoGridListComponent,
    VideoGridListComponent,
    UploadListComponent,
    FileManagerComponent,
    // Directive
    FileManagerDirective
  ]
})
export class UploadModule {}
