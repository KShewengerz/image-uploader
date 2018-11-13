import { Component } from '@angular/core';

import { File } from '@app/upload/interfaces/file.interface';


@Component({
  selector    : 'app-file-manager',
  templateUrl : './file-manager.component.html',
  styleUrls   : ['./file-manager.component.scss']
})
export class FileManagerComponent {
  
  filesSelected: File;
  
  constructor() { }
  
  getFiles(files: File): void {
    this.filesSelected = files;
  }
  
}
