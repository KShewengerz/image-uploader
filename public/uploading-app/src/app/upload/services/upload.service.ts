import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadService {
  
  baseImageUrl: string = 'https://s3.amazonaws.com/sample-v1';

  constructor() { }
  
  getPhotos(): Observable<string[]> {
    const imageLinks: any[] = [
      { id: 1, link: `${this.baseImageUrl}/architecture.jpg`, width: '', height: '' },
      { id: 2, link: `${this.baseImageUrl}/boat.jpg` , width: '', height: '' },
      { id: 3, link: `${this.baseImageUrl}/bonding.jpg` , width: '', height: '' },
      { id: 4, link: `${this.baseImageUrl}/books.jpg` , width: '', height: '' },
      { id: 5, link: `${this.baseImageUrl}/family.jpg` , width: '', height: '' },
      { id: 6, link: `${this.baseImageUrl}/overlooking.jpg` , width: '', height: '' },
      { id: 7, link: `${this.baseImageUrl}/overview.jpg` , width: '', height: '' },
      { id: 8, link: `${this.baseImageUrl}/river.jpg` , width: '', height: '' },
      { id: 9, link: `${this.baseImageUrl}/rocks.jpg` , width: '', height: '' },
      { id: 10, link: `${this.baseImageUrl}/wedding.jpg`, width: '', height: '' }
    ];
    
    return of(imageLinks);
  }
  
}
