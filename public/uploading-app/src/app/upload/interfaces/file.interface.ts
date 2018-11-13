import { FileType } from '@app/upload/enums/file-type.enum';


export interface File {
  name: string;
  size: number;
  type: FileType;
}
