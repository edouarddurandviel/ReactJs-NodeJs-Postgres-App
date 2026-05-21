import type { WritableDraft } from "immer";
import type { UserConnected } from "./interfaces";

// Initial state
export const initialState = {
  user: null as unknown as UserConnected,
  userSuccess: false,
  userLoading: false,
  userErrors: false,
  reset: [],
};

export type State = typeof initialState;

// Reducer with Immer
export type Action = WritableDraft<{
  type: unknown;
  payload?: State;
}>;

export type action = {
  type: string;
  payload: State;
};
