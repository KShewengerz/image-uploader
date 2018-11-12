import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { UploadComponent } from '@app/upload/containers/upload/upload.component';
import { ProfileComponent } from '@app/upload/containers/profile/profile.component';
import { MediaComponent } from '@app/upload/containers/media/media.component';

// Components
import { PhotoListComponent } from '@app/upload/components/photo-list/photo-list.component';
import { VideoListComponent } from '@app/upload/components/video-list/video-list.component';
import { UploadListComponent } from '@app/upload/components/upload-list/upload-list.component';
import { UserFormComponent } from '@app/upload/components/user-form/user-form.component';

// Pipe
import { FileSizePipe } from '@app/upload/pipes/file-size.pipe';

// Route
import { UploadRouting } from '@app/upload/upload-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Route
    UploadRouting
  ],
  declarations: [
    //Containers
    UploadComponent,
    ProfileComponent,
    MediaComponent,
    // Components
    PhotoListComponent,
    VideoListComponent,
    UploadListComponent,
    UserFormComponent,
    // Pipe
    FileSizePipe
  ]
})
export class UploadModule {}
