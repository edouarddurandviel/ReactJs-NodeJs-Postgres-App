import { produce, type WritableDraft } from "immer";
import * as actionType from "./types";
import { initialState, type State, type Action } from "./initialState";
import type { Address, Company } from "./interfaces";

export default (state: State = initialState, action: Action): State => {
  // use produce from Immer to allow "mutating" logic
  return produce(state, (draft: WritableDraft<State>) => {
    switch (action.type) {
      case actionType.GET_ALL_COMPANIES_LOADING:
        draft.companiesLoading = true;
        break;

      case actionType.GET_ALL_COMPANIES_SUCCESS:
        draft.companiesSuccess = true;
        if (Array.isArray(action.payload)) {
          draft.companies = action.payload;
        }
        draft.companiesLoading = false;
        break;
      case actionType.GET_ALL_COMPANIES_FAILURE:
        draft.companiesLoading = false;
        draft.companiesErrors = true;
        break;

      case actionType.GET_ONE_COMPANY_LOADING:
        draft.companyLoading = true;
        break;
      case actionType.GET_ONE_COMPANY_SUCCESS:
        draft.companySuccess = true;
        draft.company = action.payload as unknown as Company;
        draft.companyLoading = false;
        break;
      case actionType.GET_ONE_COMPANY_FAILURE:
        draft.companyLoading = false;
        draft.companyErrors = true;
        break;

      case actionType.ADD_ONE_COMPANY_LOADING:
        draft.addCompanyLoading = true;
        break;
      case actionType.ADD_ONE_COMPANY_SUCCESS:
        draft.addCompanyLoading = false;
        draft.addCompanySuccess = true;
        draft.addCompany = action.payload as unknown as Company;
        break;
      case actionType.ADD_ONE_COMPANY_FAILURE:
        draft.addCompanyErrors = true;
        break;

      case actionType.ADD_ONE_COMPANY_ADDRESS_LOADING:
        draft.addCompanyAddressLoading = true;
        break;
      case actionType.ADD_ONE_COMPANY_ADDRESS_SUCCESS:
        draft.addCompanyAddressLoading = false;
        draft.addCompanyAddressSuccess = true;
        draft.addCompanyAddress = action.payload as unknown as Address;
        break;
      case actionType.ADD_ONE_COMPANY_FAILURE:
        draft.addCompanyErrors = true;
        break;

      case actionType.DELETE_ONE_COMPANY_LOADING:
        draft.deleteCompanyLoading = true;
        break;
      case actionType.DELETE_ONE_COMPANY_SUCCESS:
        draft.deleteCompanyLoading = false;
        draft.deleteCompanySuccess = true;
        draft.deleteCompany = action.payload as unknown as Company;
        break;
      case actionType.DELETE_ONE_COMPANY_FAILURE:
        draft.deleteCompanyErrors = true;
        break;

      case actionType.UPDATE_ONE_COMPANY_LOADING:
        draft.updateCompanyLoading = true;
        break;
      case actionType.UPDATE_ONE_COMPANY_SUCCESS:
        draft.updateCompanyLoading = false;
        draft.updateCompanySuccess = true;
        draft.updateCompany = action.payload as unknown as Company;
        break;
      case actionType.UPDATE_ONE_COMPANY_FAILURE:
        draft.updateCompanyError = true;
        break;

      case actionType.FILTER_COMPANIES_LOADING:
        draft.filteredCompaniesLoading = true;
        break;

      case actionType.FILTER_COMPANIES_SUCCESS:
        draft.filteredCompaniesSuccess = true;
        if (Array.isArray(action.payload)) {
          draft.filteredCompanies = action.payload;
        }
        draft.filteredCompaniesLoading = false;
        break;

      case actionType.FILTER_COMPANIES_FAILURE:
        draft.filteredCompaniesErrors = true;
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
