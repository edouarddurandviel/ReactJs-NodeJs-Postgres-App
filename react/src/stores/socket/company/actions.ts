import * as companyType from "../../company/types";

export const subscribeAllCompanies = () => {
  return {
    socket: true,
    message: `company`,
    type: companyType.GET_ALL_COMPANIES_REQUEST,
  };
};
export const unsubscribeAllCompanies = () => {
  return {
    socket: true,
    message: `company`,
    type: companyType.GET_ALL_COMPANIES_REQUEST,
    leave: true,
  };
};

export const subscribeOneCompany = (companyId?: string) => {
  return {
    socket: true,
    message: `company:${companyId}`,
    type: companyType.GET_ONE_COMPANY_REQUEST,
  };
};
export const unsubscribeOneCompany = (companyId?: string) => {
  return {
    socket: true,
    message: `company:${companyId}`,
    type: companyType.GET_ONE_COMPANY_REQUEST,
    leave: true,
  };
};
