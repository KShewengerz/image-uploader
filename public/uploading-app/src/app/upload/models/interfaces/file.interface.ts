import { FileType } from '@app/upload/models/enums/file-type.enum';


export interface File {
  name: string;
  size: number;
  type: FileType;
}
