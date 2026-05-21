import type { AppDispatch } from "..";
import * as actionType from "./types";
import requests from "./api";

export const getAllCompanies = () => {
  return {
    type: actionType.GET_ALL_COMPANIES_REQUEST,
  };
};

export const getOneCompany = (data: object) => {
  return {
    type: actionType.GET_ONE_COMPANY_REQUEST,
    payload: data,
  };
};

export const addOneCompanyAddress = (data: object) => {
  return {
    type: actionType.ADD_ONE_COMPANY_ADDRESS_REQUEST,
    payload: data,
  };
};

export const addOneCompany = (data: object) => {
  return {
    type: actionType.ADD_ONE_COMPANY_REQUEST,
    payload: data,
  };
};

export const deleteOneCompany = (data: object) => {
  return {
    type: actionType.DELETE_ONE_COMPANY_REQUEST,
    payload: data,
  };
};

export const updateOneCompany = (data: object) => {
  return {
    type: actionType.UPDATE_ONE_COMPANY_REQUEST,
    payload: data,
  };
};

export const getFilteredCompanies = (data: object) => {
  return {
    type: actionType.FILTER_COMPANIES_REQUEST,
    payload: data,
  };
};

export const reset = (data: string[]) => {
  return {
    type: actionType.COMPANIES_RESET,
    payload: data,
  };
};

// thunk version with eventually side effects
export const getAllCompaniesThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: actionType.GET_ALL_COMPANIES_LOADING,
      });
      const resp = await requests.getAllCompanies();
      dispatch({
        type: actionType.GET_ALL_COMPANIES_SUCCESS,
        payload: resp.data.data,
      });
    } catch (error: unknown) {
      dispatch({
        type: actionType.GET_ALL_COMPANIES_FAILURE,
        payload: error,
      });
    }
  };
};

// thunk version with eventually side effects
export const resetThunk = (data: string[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: actionType.RESET,
      payload: data,
    });
  };
};
