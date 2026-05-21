import { produce, type WritableDraft } from "immer";
import * as actionType from "./types";
import { initialState, type State, type Action } from "./initialState";
import type { Profil, User } from "./interfaces";

export default (state: State = initialState, action: Action): State => {
  return produce(state, (draft: WritableDraft<State>) => {
    switch (action.type) {
      case actionType.PROFIL_LOADING:
        draft.profilLoading = true;
        break;
      case actionType.PROFIL_SUCCESS:
        draft.profilSuccess = true;
        draft.profil = action.payload as unknown as Profil;
        draft.profilLoading = false;
        break;
      case actionType.PROFIL_FAILURE:
        draft.profilLoading = false;
        draft.profilError = true;
        break;

      case actionType.GET_ALL_USERS_LOADING:
        draft.usersLoading = true;
        break;

      case actionType.GET_ALL_USERS_SUCCESS:
        draft.usersSuccess = true;
        if (Array.isArray(action.payload)) {
          draft.users = action.payload;
        }
        draft.usersLoading = false;
        break;
      case actionType.GET_ALL_USERS_FAILURE:
        draft.usersLoading = false;
        draft.usersErrors = true;
        break;

      case actionType.GET_ONE_USER_LOADING:
        draft.userLoading = true;
        break;
      case actionType.GET_ONE_USER_SUCCESS:
        draft.userSuccess = true;
        draft.user = action.payload as unknown as User;
        draft.userLoading = false;
        break;
      case actionType.GET_ONE_USER_FAILURE:
        draft.userLoading = false;
        draft.userErrors = true;
        break;

      case actionType.ADD_ONE_USER_LOADING:
        draft.addUserLoading = true;
        break;
      case actionType.ADD_ONE_USER_SUCCESS:
        draft.addUserLoading = false;
        draft.addUserSuccess = true;
        draft.addUser = action.payload as unknown as User;
        break;
      case actionType.ADD_ONE_USER_FAILURE:
        draft.addUserErrors = true;
        break;

      case actionType.DELETE_ONE_USER_LOADING:
        draft.deleteUserLoading = true;
        break;
      case actionType.DELETE_ONE_USER_SUCCESS:
        draft.deleteUserLoading = false;
        draft.deleteUserSuccess = true;
        draft.deleteUser = action.payload as unknown as User;
        break;
      case actionType.DELETE_ONE_USER_FAILURE:
        draft.deleteUserErrors = true;
        break;

      case actionType.UPDATE_ONE_USER_LOADING:
        draft.updateUserLoading = true;
        break;
      case actionType.UPDATE_ONE_USER_SUCCESS:
        draft.updateUserLoading = false;
        draft.updateUserSuccess = true;
        draft.updateUser = action.payload as unknown as User;
        break;
      case actionType.UPDATE_ONE_USER_FAILURE:
        draft.updateUserError = true;
        break;

      case actionType.FILTER_USERS_LOADING:
        draft.filteredUsersLoading = true;
        break;

      case actionType.FILTER_USERS_SUCCESS:
        draft.filteredUsersSuccess = true;
        if (Array.isArray(action.payload)) {
          draft.filteredUsers = action.payload;
        }
        draft.filteredUsersLoading = false;
        break;
      case actionType.FILTER_USERS_FAILURE:
        draft.filteredUsersErrors = true;
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
