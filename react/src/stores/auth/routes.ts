import type { Middleware } from "redux";
import requests from "./api";
import * as actionTypes from "./types";
import type { Payload } from "./interfaces";

type Action = {
  type?: string;
  payload: Payload;
  message?: string;
  socket?: boolean;
};

export const authMiddleware: Middleware = (api) => (next) => async (action: unknown) => {
  const typedAction = action as Action;
  const { dispatch } = api;

  if (!typedAction.socket) {
    switch (typedAction.type) {
      case actionTypes.USER_LOGIN_REQUEST:
        try {
          dispatch({
            type: actionTypes.USER_LOGIN_LOADING,
          });
          const resp = await requests.userLogin(typedAction.payload);
          dispatch({
            type: actionTypes.USER_LOGIN_SUCCESS,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.USER_LOGIN_FAILURE,
            payload: error,
          });
        }
        break;

      case actionTypes.USER_LOGOUT_REQUEST:
        try {
          dispatch({
            type: actionTypes.USER_LOGOUT_LOADING,
          });
          const resp = await requests.userLogout(typedAction.payload);

          dispatch({
            type: actionTypes.USER_LOGOUT_SUCCESS,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.USER_LOGOUT_FAILURE,
            payload: error,
          });
        }
        break;

      case actionTypes.USER_RESET:
        dispatch({
          type: actionTypes.RESET,
          payload: typedAction.payload,
        });
        break;

      default:
        next(action);
    }
  } else {
    next(action);
  }
};
