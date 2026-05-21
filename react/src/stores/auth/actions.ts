import * as actionType from "./types";

export const userLogin = (data: object) => {
  return {
    type: actionType.USER_LOGIN_REQUEST,
    payload: data,
  };
};

export const userLogout = (data: object) => {
  return {
    type: actionType.USER_LOGOUT_REQUEST,
    payload: data,
  };
};

export const reset = (data: string[]) => {
  return {
    type: actionType.USER_RESET,
    payload: data,
  };
};
