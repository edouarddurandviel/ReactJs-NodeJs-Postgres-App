import type { WritableDraft } from "immer";
import type { Address, Company } from "./interfaces";

// Initial state
export const initialState = {
  // Payload
  companies: [] as Company[],
  company: {} as Company,
  addCompany: {} as Company,
  addCompanyAddress: {} as Address,
  deleteCompany: {} as Company,
  filteredCompanies: [] as Company[],
  updateCompany: {} as Company,
  // Success
  companiesSuccess: false,
  companySuccess: false,
  addCompanySuccess: false,
  addCompanyAddressSuccess: false,
  deleteCompanySuccess: false,
  filteredCompaniesSuccess: false,
  updateCompanySuccess: false,
  // Loading
  companyLoading: false,
  companiesLoading: false,
  addCompanyLoading: false,
  addCompanyAddressLoading: false,
  deleteCompanyLoading: false,
  filteredCompaniesLoading: false,
  updateCompanyLoading: false,
  // Error
  companyErrors: false,
  companiesErrors: false,
  addCompanyErrors: false,
  addCompanyAddressError: false,
  deleteCompanyErrors: false,
  filteredCompaniesErrors: false,
  updateCompanyError: false,

  reset: [],
};

export type State = typeof initialState;

// Reducer with Immer
export type Action = WritableDraft<{
  type: unknown;
  payload?: State;
}>;

export type action = {
  type: string;
  payload: State;
};
