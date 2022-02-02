export interface Post {
  postId:number;
  username: string;
  createdDate: string;
  tags?: string[];
  allowed:ALLOWEDFOR;
  imageSrc:string;
  text:string;
  likes?:string[];
  comments?:string[];
}

export enum ALLOWEDFOR{
  ALL='ALL',FRIENDS='FRIENDS',ONLYME='ONLYME'
}

