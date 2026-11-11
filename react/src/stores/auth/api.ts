import request from "../../api/apiClient";
import apiRoutes from "../../api/apiRoutes";
import type { Payload } from "./interfaces";

export default {
  userLogin: (data: Payload) => {
    const userApi = apiRoutes.auth.login;
    return request({
      path: userApi.path,
      data: data,
      method: userApi.method,
    });
  },
  userLogout: (data: Payload) => {
    const userApi = apiRoutes.auth.logout;
    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
    });
  },
};
