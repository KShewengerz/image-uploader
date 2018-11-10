import { FormlyFieldConfig } from '@ngx-formly/core';


/* SIGN IN FORM FIELDS */
export const signInFormFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      placeholder: 'Username',
      required: true,
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Password',
      required: true,
    }
  }
];

/* SIGN UP FORM FIELDS */
export const signUpFormFields: FormlyFieldConfig[] = [
  ...signInFormFields,
  {
    key: 'confirmPassword',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
    }
  }
];

/* TAB */
export type Tab = { label: string; type: string, fields: FormlyFieldConfig[] };

export const tabs: Tab[] = [
  { label: 'Existing User', type: 'Log In', fields: signInFormFields },
  { label: 'New User', type: 'Sign Up', fields: signUpFormFields },
];
