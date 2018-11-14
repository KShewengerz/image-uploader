import { FormlyFieldConfig } from '@ngx-formly/core';

import { signInFormFields, signUpFormFields } from '@app/shared/data/user-form.data';


/* TAB */
export type Tab = { label: string; buttonLabel: string, fields: FormlyFieldConfig[] };

export const tabs: Tab[] = [
  { label: 'Existing User', buttonLabel: 'Log In', fields: signInFormFields },
  { label: 'New User', buttonLabel: 'Sign Up', fields: signUpFormFields },
];
