import { Gender } from './gender.enum';


export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  id: string;
  fullName: string;
  gender: Gender,
  credentials: Credentials;
}


