import { Component, Input } from '@angular/core';

import { File } from '@app/upload/models/interfaces/file.interface';


@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent {

  @Input() files: File;
  
  constructor() { }

}
