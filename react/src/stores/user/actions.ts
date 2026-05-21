import type { RootState } from "..";
import type { ThunkAction } from "redux-thunk";
import type { AnyAction } from "redux";
import * as actionType from "./types";
import requests from "./api";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const getAllUsers = () => {
  return {
    type: actionType.GET_ALL_USERS_REQUEST,
  };
};

export const getOneUser = (data: object) => {
  return {
    type: actionType.GET_ONE_USER_REQUEST,
    payload: data,
  };
};

export const addOneUser = (data: object) => {
  return {
    type: actionType.ADD_ONE_USER_REQUEST,
    payload: data,
  };
};

export const deleteOneUser = (data: object) => {
  return {
    type: actionType.DELETE_ONE_USER_REQUEST,
    payload: data,
  };
};

export const updateOneUser = (data: object) => {
  return {
    type: actionType.UPDATE_ONE_USER_REQUEST,
    payload: data,
  };
};

export const getFilteredUsers = (data: object) => {
  return {
    type: actionType.FILTER_USERS_REQUEST,
    payload: data,
  };
};

export const reset = (data: string[]) => {
  return {
    type: actionType.USERS_RESET,
    payload: data,
  };
};

export const addProfilThunk = (data: any): AppThunk<Promise<void>> => {
  return async (useAppDispatch) => {
    try {
      useAppDispatch({
        type: actionType.PROFIL_REQUEST,
      });
      const resp = await requests.addProfil(data);
      useAppDispatch({
        type: actionType.PROFIL_SUCCESS,
        payload: resp,
      });
    } catch (error: unknown) {
      useAppDispatch({
        type: actionType.PROFIL_FAILURE,
        payload: error,
      });
    }
  };
};

// thunk version with eventually side effects
export const getAllUsersThunk = (): AppThunk<Promise<void>> => {
  return async (useAppDispatch) => {
    try {
      useAppDispatch({
        type: actionType.GET_ALL_USERS_LOADING,
      });
      const resp = await requests.getAllUsers();
      useAppDispatch({
        type: actionType.GET_ALL_USERS_SUCCESS,
        payload: resp.data.data,
      });
    } catch (error: unknown) {
      useAppDispatch({
        type: actionType.GET_ALL_USERS_FAILURE,
        payload: error,
      });
    }
  };
};

// thunk version with eventually side effects
export const resetThunk = (data: string[]): AppThunk<Promise<void>> => {
  return async (useAppDispatch) => {
    useAppDispatch({
      type: actionType.RESET,
      payload: data,
    });
  };
};
