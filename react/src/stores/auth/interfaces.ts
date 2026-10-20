import type { PathParamsObject, QueryObject } from "../../api/interfaces";

export type UserConnected = {
  loggedUser: {
    id: string;
    email: string;
    perms: any;
  };
};

interface State {
  loading: boolean;
  error: string | null;
}

export interface UserState extends State {
  user?: UserConnected;
}

export interface ResponseState {
  [key: string]: UserState;
}

export type Payload = {
  data: UserConnected;
  params: PathParamsObject;
  query: QueryObject;
};

export type Action = {
  type: string;
  payload: Payload;
};
