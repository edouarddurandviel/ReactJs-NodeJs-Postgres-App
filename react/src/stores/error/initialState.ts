import type { WritableDraft } from "immer";

// Initial state
export const initialState = {
  error: null as unknown as any,
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
