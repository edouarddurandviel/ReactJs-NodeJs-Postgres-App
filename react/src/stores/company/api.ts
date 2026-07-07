import request from "../../api/apiClient";
import apiRoutes from "../../api/apiRoutes";
import type { PathParamsObject } from "../../api/interfaces";
import type { Address, Company, Payload } from "./interfaces";

export default {
  getAllCompanies: () => {
    const companyApi = apiRoutes.companies.all;
    return request({
      path: companyApi.path,
      method: companyApi.method,
    });
  },
  getOneCompany: (data: Payload<Company>) => {
    const companyApi = apiRoutes.companies.one;
    return request({
      path: companyApi.path,
      params: data.params,
      method: companyApi.method,
    });
  },
  getFilteredCompanies: (data: Payload<Company>) => {
    const companyApi = apiRoutes.companies.all;
    return request({
      path: companyApi.path,
      params: data.params,
      method: companyApi.method,
      query: data.query,
    });
  },
  addOneCompany: (data: Payload<Company>) => {
    const companyApi = apiRoutes.companies.create;

    const formData = new FormData();
    formData.append("name", data.data.name);
    formData.append("activity", data.data.activity);
    formData.append("owner", data.data.owner);
    if (data.data.imgpath) formData.append("image", data.data.imgpath);

    return request({
      path: companyApi.path,
      params: data.params,
      method: companyApi.method,
      data: formData,
      headers: data.data.imgpath ? false : true,
    });
  },
  addOneCompanyAddress: (data: Payload<Address>) => {
    const companyApi = apiRoutes.companies.addresses.create;

    const formData = new FormData();
    formData.append("street", data.data.street);
    formData.append("postcode", data.data.postcode);
    formData.append("city", data.data.city);

    return request({
      path: companyApi.path,
      params: data.params,
      method: companyApi.method,
      data: formData,
    });
  },
  updateOneCompany: (data: Payload<Company>) => {
    const companyApi = apiRoutes.companies.update;
    const formData = new FormData();
    formData.append("name", data.data.name);
    formData.append("activity", data.data.activity);
    formData.append("owner", data.data.owner);
    if (data.data.imgpath) {
      formData.append("image", data.data.imgpath);
    }

    return request({
      path: companyApi.path,
      params: data.params,
      method: companyApi.method,
      data: formData,
      headers: data.data.imgpath ? false : true,
    });
  },
  deleteOneCompany: (data: Payload<Company>) => {
    const companyApi = apiRoutes.companies.delete;
    return request({
      path: companyApi.path,
      params: data.params,
      method: companyApi.method,
    });
  },
  getCompanyDocuments: (params: PathParamsObject) => {
    const companyApi = apiRoutes.companies.create;
    return request({
      path: companyApi.path,
      params: params,
      method: companyApi.method,
    });
  },
};
