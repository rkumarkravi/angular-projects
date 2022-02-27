export interface Post {
  postId: number;
  username: string;
  createdDate: string;
  tags?: string[];
  allowed: ALLOWEDFOR;
  imageSrc: string;
  text: string;
  likes?: string[];
  comments?: string[];
}

export interface User {
  firstName: string;
  lastName: string;
  createdDate: string;
  email: string;
  dob: string;
  gender: string;
  active: string;
  userid: string;
}

export enum ALLOWEDFOR {
  ALL = 'ALL',
  FRIENDS = 'FRIENDS',
  ONLYME = 'ONLYME',
}
