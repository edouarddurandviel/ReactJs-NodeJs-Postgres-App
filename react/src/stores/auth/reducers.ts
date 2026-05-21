import { produce, type WritableDraft } from "immer";
import * as actionType from "./types";
import { initialState, type State, type Action } from "./initialState";
import type { UserConnected } from "./interfaces";

export default (state: State = initialState, action: Action): State => {
  // use produce from Immer to allow "mutating" logic
  return produce(state, (draft: WritableDraft<State>) => {
    switch (action.type) {
      case actionType.USER_LOGIN_LOADING:
        draft.userLoading = true;
        break;
      case actionType.USER_LOGIN_SUCCESS:
        draft.userLoading = false;
        draft.userSuccess = true;
        draft.user = action.payload as unknown as UserConnected;
        break;
      case actionType.USER_LOGIN_FAILURE:
        draft.userErrors = true;
        break;

      case actionType.USER_LOGOUT_LOADING:
        draft.userLoading = true;
        break;
      case actionType.USER_LOGOUT_SUCCESS:
        draft.userLoading = false;
        draft.userSuccess = true;
        draft.user = action.payload as unknown as UserConnected;
        break;
      case actionType.USER_LOGOUT_FAILURE:
        draft.userErrors = true;
        break;

      case actionType.RESET:
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
