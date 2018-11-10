import { FormlyFieldConfig } from '@ngx-formly/core';


/* TAB */
export type Tab = { label: string; type: string };

export const tabs: Tab[] = [
  { label: 'Existing User', type: 'Log In' },
  { label: 'New User', type: 'Sign Up' },
];


/* FORM FIELDS */
export const formFields: FormlyFieldConfig[] = [
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
  },
  {
    key: 'confirmPassword',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
    },
    hideExpression: true
  }
];
