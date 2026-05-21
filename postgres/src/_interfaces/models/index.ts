export interface Company {
  ref: number;
  name: string;
  isoCode: string;
  user_id: number;
}

export interface User {
  email: string;
  password: string;
  id: number;
  salt: string;
}

export interface UserToken {
  token: string;
  User_Id: string;
}
