import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Photo } from '@app/upload/models/interfaces/photo.interface';

import { UploadService } from '@app/upload/services/upload.service';


@Injectable({ providedIn: 'root' })
export class PhotoGridListResolver implements Resolve<Photo[]> {
  
  constructor(private uploadService: UploadService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    return this.uploadService.getPhotos();
  }
  
}

