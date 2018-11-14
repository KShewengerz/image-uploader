import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector    : 'app-upload',
  templateUrl : './upload.component.html',
  styleUrls   : ['./upload.component.scss']
})
export class UploadComponent {
  
  isEditProfile: boolean = false;
  
  constructor(private router: Router) {}
  
  logOut(): void {
    this.router.navigate(['/']);
  }
  
}
