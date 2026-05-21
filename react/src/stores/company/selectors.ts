import type { RootState } from "..";

const companiesSelector = (state: RootState) => state.company.companies;
const companySelector = (state: RootState) => state.company.company;
const addCompanySelector = (state: RootState) => state.company.addCompany;
const addCompanyAddressSelector = (state: RootState) => state.company.addCompanyAddress;
const filteredCompaniesSelector = (state: RootState) => state.company.filteredCompanies;
const updateCompanySelector = (state: RootState) => state.company.updateCompany;

const companiesLoadingSelector = (state: RootState) => state.company.companiesLoading;
const companyLoadingSelector = (state: RootState) => state.company.companyLoading;
const addCompanyLoadingSelector = (state: RootState) => state.company.addCompanyLoading;
const filteredCompaniesLoadingSelector = (state: RootState) =>
  state.company.filteredCompaniesLoading;
const updateCompanyLoadingSelector = (state: RootState) => state.company.updateCompanyLoading;

const addCompanySuccessSelector = (state: RootState) => state.company.addCompanySuccess;

const companiesErrorsSelector = (state: RootState) => state.company.companiesErrors;
const addCompanyErrorsSelector = (state: RootState) => state.company.addCompanyErrors;
const updateCompanyErrorSelector = (state: RootState) => state.company.updateCompanyError;

export default {
  companiesSelector,
  addCompanySelector,
  companiesLoadingSelector,
  addCompanyLoadingSelector,
  companiesErrorsSelector,
  addCompanyErrorsSelector,
  filteredCompaniesSelector,
  filteredCompaniesLoadingSelector,
  addCompanySuccessSelector,
  updateCompanySelector,
  updateCompanyLoadingSelector,
  updateCompanyErrorSelector,
  companyLoadingSelector,
  companySelector,
  addCompanyAddressSelector,
};
