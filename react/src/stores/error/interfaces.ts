interface State {
  loading: boolean;
  error: string | null;
}

export interface ErrorState extends State {
  errors: any;
}

export interface ResponseState {
  [key: string]: ErrorState;
}

export type Payload = {
  data: any;
};

export type Action = {
  type: string;
  payload: Payload;
};
