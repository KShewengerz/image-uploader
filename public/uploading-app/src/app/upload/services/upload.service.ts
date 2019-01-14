import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Photo } from '@app/upload/models/interfaces/photo.interface';
import { Video } from '@app/upload/models/interfaces/video.interface';


@Injectable({ providedIn: 'root' })
export class UploadService {
  
  baseUrl: string = 'https://s3.amazonaws.com/sample-v1';

  constructor() { }
  
  getPhotos(): Observable<Photo[]> {
    const photos: Photo[] = [
      { id: 1, link: `${this.baseUrl}/architecture.jpg`, size: 430800 },
      { id: 2, link: `${this.baseUrl}/boat.jpg`, size: 153600  },
      { id: 3, link: `${this.baseUrl}/bonding.jpg`, size: 266600  },
      { id: 4, link: `${this.baseUrl}/books.jpg`, size: 130700  },
      { id: 5, link: `${this.baseUrl}/family.jpg`, size: 105900  },
      { id: 6, link: `${this.baseUrl}/overlooking.jpg`, size: 288800  },
      { id: 7, link: `${this.baseUrl}/overview.jpg`, size: 142200  },
      { id: 8, link: `${this.baseUrl}/river.jpg`, size: 115800  },
      { id: 9, link: `${this.baseUrl}/rocks.jpg`, size: 164200  },
      { id: 10, link: `${this.baseUrl}/wedding.jpg`, size: 87900 }
    ];
    
    return of(photos);
  }
  
  getVideos(): Observable<Video[]> {
    const videos: Video[] = [
      { id: 1, link: `${this.baseUrl}/SampleVideo_360x240_5mb.mp4` },
      { id: 2, link: `${this.baseUrl}/SampleVideo_360x240_5mb.mp4` },
      { id: 3, link: `${this.baseUrl}/SampleVideo_360x240_5mb.mp4` },
      { id: 4, link: `${this.baseUrl}/SampleVideo_360x240_5mb.mp4` },
      { id: 5, link: `${this.baseUrl}/SampleVideo_360x240_5mb.mp4` }
    ];
    
    return of(videos);
  }
  
}
