import type { Middleware } from "redux";
import requests from "./api";
import * as actionTypes from "./types";
import type { Company, Payload } from "./interfaces";

type Action = {
  type?: string;
  payload: Payload<Company>;
  message?: string;
  socket?: boolean;
};

export const companyMiddleware: Middleware = (api) => (next) => async (action: unknown) => {
  const typedAction = action as Action;
  const { dispatch } = api;

  if (!typedAction.socket) {
    switch (typedAction.type) {
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

      case actionTypes.GET_ONE_COMPANY_REQUEST:
        try {
          dispatch({
            type: actionTypes.GET_ONE_COMPANY_LOADING,
          });
          const resp = await requests.getOneCompany(typedAction.payload);
          dispatch({
            type: actionTypes.GET_ONE_COMPANY_SUCCESS,
            payload: resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.GET_ONE_COMPANY_FAILURE,
            payload: error,
          });
        }
        break;

      case actionTypes.ADD_ONE_COMPANY_REQUEST:
        try {
          const resp = await requests.addOneCompany(typedAction.payload);
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

      case actionTypes.ADD_ONE_COMPANY_ADDRESS_REQUEST:
        try {
          const resp = await requests.addOneCompanyAddress((typedAction.payload as any).addresses);
          dispatch({
            type: actionTypes.ADD_ONE_COMPANY_ADDRESS_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.ADD_ONE_COMPANY_ADDRESS_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.ADD_ONE_COMPANY_ADDRESS_SUCCESS,
          });
        }
        break;

      case actionTypes.DELETE_ONE_COMPANY_REQUEST:
        try {
          const resp = await requests.deleteOneCompany(typedAction.payload);
          dispatch({
            type: actionTypes.DELETE_ONE_COMPANY_LOADING,
            payload: resp && resp.data.data,
          });
        } catch (error: unknown) {
          dispatch({
            type: actionTypes.DELETE_ONE_COMPANY_FAILURE,
            payload: error,
          });
        } finally {
          dispatch({
            type: actionTypes.DELETE_ONE_COMPANY_SUCCESS,
          });
        }
        break;

      case actionTypes.UPDATE_ONE_COMPANY_REQUEST:
        try {
          const resp = await requests.updateOneCompany(typedAction.payload);
          dispatch({
            type: actionTypes.UPDATE_ONE_COMPANY_LOADING,
            payload: resp.data.data,
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
          const resp = await requests.getFilteredCompanies(typedAction.payload);
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

      case actionTypes.COMPANIES_RESET:
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
