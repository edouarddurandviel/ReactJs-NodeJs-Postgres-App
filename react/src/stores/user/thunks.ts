import requests from "./api";
import * as actionTypes from "./types";
import type { AppDispatch } from "..";
import type { Action } from "./interfaces";

export const companyActions = (action: Action) => {
  return async (dispatch: AppDispatch) => {
    switch (action.type) {
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

      case actionTypes.ADD_ONE_USER_REQUEST:
        try {
          const resp = await requests.addOneUser(action.payload);
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

      case actionTypes.UPDATE_ONE_USER_REQUEST:
        try {
          const resp = await requests.updateOneUser(action.payload);
          dispatch({
            type: actionTypes.UPDATE_ONE_USER_LOADING,
            payload: resp && resp.data.data,
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
          const resp = await requests.getFilteredUsers(action.payload);
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

      case actionTypes.RESET:
        dispatch({
          type: actionTypes.RESET,
          payload: action.payload,
        });
        break;
    }
  };
};
