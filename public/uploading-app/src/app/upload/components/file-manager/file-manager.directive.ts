import { Input, Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appFileManager]',
  exportAs: 'appFileManager'
})
export class FileManagerDirective {
  
  @Input()
  fileRef: HTMLInputElement;
  
  constructor(private elementRef: ElementRef) {}
  
  openFileManager(): void {
    this.fileRef.click();
  }
  
}
