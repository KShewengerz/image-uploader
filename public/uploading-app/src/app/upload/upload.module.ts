import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Containers
import { UploadComponent } from '@app/upload/containers/upload/upload.component';
import { ProfileComponent } from '@app/upload/containers/profile/profile.component';
import { MediaComponent } from '@app/upload/containers/media/media.component';

// Components
import { PhotoGridListComponent } from '@app/upload/components/photo-grid-list/photo-grid-list.component';
import { VideoGridListComponent } from '@app/upload/components/video-grid-list/video-grid-list.component';
import { UploadListComponent } from '@app/upload/components/upload-list/upload-list.component';
import { UserFormComponent } from '@app/upload/components/user-form/user-form.component';
import { FileManagerComponent } from '@app/upload/components/file-manager/file-manager.component';

// Pipe
import { FileSizePipe } from '@app/upload/pipes/file-size.pipe';

// Directives
import { FileManagerDirective } from '@app/upload/components/file-manager/file-manager.directive';

// Modules
import { UploadMaterialModule } from '@app/upload/upload-material.module';
import { UploadRouting } from '@app/upload/upload-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    UploadMaterialModule,
    UploadRouting
  ],
  declarations: [
    //Containers
    UploadComponent,
    ProfileComponent,
    MediaComponent,
    // Components
    PhotoGridListComponent,
    VideoGridListComponent,
    UploadListComponent,
    UserFormComponent,
    FileManagerComponent,
    // Pipe
    FileSizePipe,
    // Directive
    FileManagerDirective
  ]
})
export class UploadModule {}
