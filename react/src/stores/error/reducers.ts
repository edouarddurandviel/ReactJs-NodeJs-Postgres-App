import { produce, type WritableDraft } from "immer";
import * as actionType from "./types";
import { initialState, type State, type Action } from "./initialState";

export default (state: State = initialState, action: Action): State => {
  // use produce from Immer to allow "mutating" logic
  return produce(state, (draft: WritableDraft<State>) => {
    switch (action.type) {
      case actionType.ERROR_MESSAGE:
        if (action.payload) {
          draft.error = action.payload;
        }
        break;

      case actionType.ERROR_MESSAGE_RESET:
        if (action.payload) {
          if (Array.isArray(action.payload)) {
            action.payload.map((item: string) => {
              Object.assign(draft, { [item]: [] });
            });
          }
        }
        break;

      default:
        return state;
    }
  });
};
