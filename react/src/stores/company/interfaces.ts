import type { PathParamsObject, QueryObject } from "../../api/interfaces";

export type Address = {
  street: string;
  postcode: string;
  city: string;
  id?: number;
};

export type Company = {
  id: string;
  name: string;
  activity: string;
  addresses: Address;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
};

interface State {
  loading: boolean;
  error: string | null;
}

export interface CompanyState extends State {
  companies?: Company[];
  company?: Company;
}

export interface ResponseState {
  [key: string]: CompanyState;
}

export type Payload = {
  data: any;
  params: PathParamsObject;
  query?: QueryObject;
};

export type Action = {
  type: string;
  payload: Payload;
};
