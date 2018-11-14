import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { File } from '@app/upload/interfaces/file.interface';


@Component({
  selector    : 'app-file-manager',
  templateUrl : './file-manager.component.html',
  styleUrls   : ['./file-manager.component.scss'],
  animations  : [
    trigger('fadeIn', [
      state('void', style({ 'opacity': 0 })),
      transition('* <=> void', animate('1000ms ease-in-out'))
    ]),
    trigger('slideDown', [
      state('void', style({ 'transform': 'translateY(-10%)' })),
      transition('* <=> void', animate('1000ms ease-in-out'))
    ])
  ]
})
export class FileManagerComponent {
  
  filesSelected: File;
  
  constructor() { }
  
  getFiles(files: File): void {
    this.filesSelected = files;
  }
  
}
