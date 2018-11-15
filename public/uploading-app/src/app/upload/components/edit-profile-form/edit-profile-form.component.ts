import {Component, EventEmitter, Output} from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { signUpFormFields } from '@app/shared/data/user-form.data';

import { Credentials } from '@app/shared/interfaces/credentials.interface';

import { animations } from '@app/upload/components/edit-profile-form/edit-profile-form.animations';


@Component({
  selector    : 'app-edit-profile-form',
  templateUrl : './edit-profile-form.component.html',
  styleUrls   : ['./edit-profile-form.component.scss'],
  animations  : [ animations.slideDownTrigger ]
})
export class EditProfileFormComponent {
  
  @Output() hideForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  fields: FormlyFieldConfig[] = signUpFormFields;
  
  constructor() {}
  
  onSubmittedForm(credentials: Credentials): void {
    console.log('Edit Profile', credentials);
  }
  
}
