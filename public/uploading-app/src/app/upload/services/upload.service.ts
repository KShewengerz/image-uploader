import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Photo } from '@app/upload/models/interfaces/photo.interface';


@Injectable({ providedIn: 'root' })
export class UploadService {
  
  baseImageUrl: string = 'https://s3.amazonaws.com/sample-v1';

  constructor() { }
  
  getPhotos(): Observable<Photo[]> {
    const imageLinks: Photo[] = [
      { id: 1, link: `${this.baseImageUrl}/architecture.jpg`, size: 430800 },
      { id: 2, link: `${this.baseImageUrl}/boat.jpg`, size: 153600  },
      { id: 3, link: `${this.baseImageUrl}/bonding.jpg`, size: 266600  },
      { id: 4, link: `${this.baseImageUrl}/books.jpg`, size: 130700  },
      { id: 5, link: `${this.baseImageUrl}/family.jpg`, size: 105900  },
      { id: 6, link: `${this.baseImageUrl}/overlooking.jpg`, size: 288800  },
      { id: 7, link: `${this.baseImageUrl}/overview.jpg`, size: 142200  },
      { id: 8, link: `${this.baseImageUrl}/river.jpg`, size: 115800  },
      { id: 9, link: `${this.baseImageUrl}/rocks.jpg`, size: 164200  },
      { id: 10, link: `${this.baseImageUrl}/wedding.jpg`, size: 87900 }
    ];
    
    return of(imageLinks);
  }
  
}
