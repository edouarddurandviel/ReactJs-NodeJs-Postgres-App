import request from "../../api/apiClient";
import apiRoutes from "../../api/apiRoutes";
import type { PathParamsObject } from "../../api/interfaces";
import type { Payload, Profil, User } from "./interfaces";

export default {
  getAllUsers: () => {
    const userApi = apiRoutes.users.all;
    return request({
      path: userApi.path,
      method: userApi.method,
    });
  },
  getOneUser: (data: Payload<User>) => {
    const userApi = apiRoutes.users.one;
    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
    });
  },
  getFilteredUsers: (data: Payload<User>) => {
    const userApi = apiRoutes.users.all;
    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
      query: data.query,
    });
  },
  addOneUser: (data: Payload<User>) => {
    const userApi = apiRoutes.users.create;

    const formData = new FormData();
    formData.append("email", data.data.email);
    formData.append("password", data.data.password);

    return request({
      path: userApi.path,
      method: userApi.method,
      data: formData,
    });
  },

  addProfil: (data: Payload<Profil>) => {
    const userApi = apiRoutes.users.addProfil;
    const formData = new FormData();
    formData.append("firstName", data.data.firstName);
    formData.append("lastName", data.data.lastName);
    formData.append("address", data.data.address);
    formData.append("postCode", data.data.postCode);
    formData.append("city", data.data.city);
    formData.append("phone", data.data.phone);

    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
      data: formData,
    });
  },

  updateOneUser: (data: Payload<User>) => {
    const userApi = apiRoutes.users.update;
    const formData = new FormData();
    formData.append("name", data.data.name);
    formData.append("ref", data.data.email);
    formData.append("isoCode", data.data.password);

    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
      data: formData,
    });
  },
  deleteOneUser: (data: Payload<User>) => {
    const userApi = apiRoutes.users.delete;
    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
    });
  },
  getUserDocuments: (params: PathParamsObject) => {
    const userApi = apiRoutes.users.create;
    return request({
      path: userApi.path,
      params: params,
      method: userApi.method,
    });
  },
};
