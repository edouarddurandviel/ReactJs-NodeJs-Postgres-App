import request from "../../api/apiClient";
import apiRoutes from "../../api/apiRoutes";
import type { Payload } from "./interfaces";

export default {
  userLogin: (data: Payload) => {
    const userApi = apiRoutes.users.login;
    return request({
      path: userApi.path,
      query: {
        email: data.query.email!,
        password: data.query.password!,
      },
      method: userApi.method,
    });
  },
  userLogout: (data: Payload) => {
    const userApi = apiRoutes.users.logout;
    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
    });
  },
};
