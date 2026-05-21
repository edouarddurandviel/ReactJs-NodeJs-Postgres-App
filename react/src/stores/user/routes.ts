import type { Middleware } from "redux";
import requests from "./api";
import * as actionTypes from "./types";
import type { Payload, User } from "./interfaces";

type Action = {
  type?: string;
  payload: Payload<User>;
  message?: string;
  socket?: boolean;
};

export const userMiddleware: Middleware = (api) => (next) => async (action: unknown) => {
  const typedAction = action as Action;
  const { dispatch } = api;

  if (!typedAction.socket) {
    switch (typedAction.type) {
      case actionTypes.GET_ALL_USERS_REQUEST:
        try {
          dispatch({
            type: actionTypes.GET_ALL_USERS_LOADING,
          });
          const resp = await requests.getAllUsers();
          dispatch({
            type: actionTypes.GET_ALL_USERS_SUCCESS,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.GET_ALL_USERS_FAILURE,
            payload: error,
          });
        }
        break;

      case actionTypes.GET_ONE_USER_REQUEST:
        try {
          dispatch({
            type: actionTypes.GET_ONE_USER_LOADING,
          });
          const resp = await requests.getOneUser(typedAction.payload);
          dispatch({
            type: actionTypes.GET_ONE_USER_SUCCESS,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.GET_ONE_USER_FAILURE,
            payload: error,
          });
        }
        break;

      case actionTypes.ADD_ONE_USER_REQUEST:
        try {
          const resp = await requests.addOneUser(typedAction.payload);
          dispatch({
            type: actionTypes.ADD_ONE_USER_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.ADD_ONE_USER_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.ADD_ONE_USER_SUCCESS,
          });
        }
        break;

      case actionTypes.DELETE_ONE_USER_REQUEST:
        try {
          const resp = await requests.deleteOneUser(typedAction.payload);
          dispatch({
            type: actionTypes.DELETE_ONE_USER_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.DELETE_ONE_USER_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.DELETE_ONE_USER_SUCCESS,
          });
        }
        break;

      case actionTypes.UPDATE_ONE_USER_REQUEST:
        try {
          const resp = await requests.updateOneUser(typedAction.payload);
          dispatch({
            type: actionTypes.UPDATE_ONE_USER_LOADING,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.UPDATE_ONE_USER_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.UPDATE_ONE_USER_SUCCESS,
          });
        }
        break;

      case actionTypes.FILTER_USERS_REQUEST:
        try {
          const resp = await requests.getFilteredUsers(typedAction.payload);
          dispatch({
            type: actionTypes.FILTER_USERS_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.FILTER_USERS_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.FILTER_USERS_SUCCESS,
          });
        }
        break;

      case actionTypes.USERS_RESET:
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
