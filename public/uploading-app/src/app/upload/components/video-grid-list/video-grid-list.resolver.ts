import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Video } from '@app/upload/models/interfaces/video.interface';

import { UploadService } from '@app/upload/services/upload.service';


@Injectable({ providedIn: 'root' })
export class VideoGridListResolver implements Resolve<Video[]> {
  
  constructor(private uploadService: UploadService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Video[]> {
    return this.uploadService.getVideos();
  }
  
}
