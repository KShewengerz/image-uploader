import { Component } from '@angular/core';

import { File } from '@app/upload/models/interfaces/file.interface';

import { animations } from '@app/upload/components/file-manager/file-manager.animations';


@Component({
  selector    : 'app-file-manager',
  templateUrl : './file-manager.component.html',
  styleUrls   : ['./file-manager.component.scss'],
  animations  : [ animations.fadeInTrigger, animations.slideDownTrigger ]
})
export class FileManagerComponent {
  
  filesSelected: File;
  
  constructor() { }
  
  getFiles(files: File): void {
    this.filesSelected = files;
  }
  
}
