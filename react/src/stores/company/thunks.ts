import requests from "./api";
import * as actionTypes from "./types";
import type { AppDispatch } from "..";
import type { Action } from "./interfaces";

export const companyActions = (action: Action) => {
  return async (dispatch: AppDispatch) => {
    switch (action.type) {
      case actionTypes.GET_ALL_COMPANIES_REQUEST:
        try {
          dispatch({
            type: actionTypes.GET_ALL_COMPANIES_LOADING,
          });
          const resp = await requests.getAllCompanies();
          dispatch({
            type: actionTypes.GET_ALL_COMPANIES_SUCCESS,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.GET_ALL_COMPANIES_FAILURE,
            payload: error,
          });
        }
        break;

      case actionTypes.ADD_ONE_COMPANY_REQUEST:
        try {
          const resp = await requests.addOneCompany(action.payload);
          dispatch({
            type: actionTypes.ADD_ONE_COMPANY_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.ADD_ONE_COMPANY_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.ADD_ONE_COMPANY_SUCCESS,
          });
        }
        break;

      case actionTypes.UPDATE_ONE_COMPANY_REQUEST:
        try {
          const resp = await requests.updateOneCompany(action.payload);
          dispatch({
            type: actionTypes.UPDATE_ONE_COMPANY_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.UPDATE_ONE_COMPANY_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.UPDATE_ONE_COMPANY_SUCCESS,
          });
        }
        break;

      case actionTypes.FILTER_COMPANIES_REQUEST:
        try {
          const resp = await requests.getFilteredCompanies(action.payload);
          dispatch({
            type: actionTypes.FILTER_COMPANIES_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.FILTER_COMPANIES_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.FILTER_COMPANIES_SUCCESS,
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
