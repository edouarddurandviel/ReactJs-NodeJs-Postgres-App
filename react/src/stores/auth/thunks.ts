import requests from "./api";
import * as actionTypes from "./types";
import type { AppDispatch } from "..";
import type { Action } from "./interfaces";

export const authActions = (action: Action) => {
  return async (dispatch: AppDispatch) => {
    switch (action.type) {
      case actionTypes.USER_LOGIN_REQUEST:
        try {
          dispatch({
            type: actionTypes.USER_LOGIN_LOADING,
          });
          const resp = await requests.userLogin(action.payload);
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
          const resp = await requests.userLogout(action.payload);
          dispatch({
            type: actionTypes.USER_LOGOUT_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.USER_LOGOUT_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.USER_LOGOUT_SUCCESS,
          });
        }
        break;

      case actionTypes.RESET:
        dispatch({
          type: actionTypes.RESET,
          payload: action.payload,
        });
        break;
    }
  };
};
