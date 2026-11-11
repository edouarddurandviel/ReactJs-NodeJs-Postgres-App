import request from "../../api/apiClient";
import apiRoutes from "../../api/apiRoutes";
import type { User } from "../user/interfaces";
import type { Payload } from "./interfaces";

export default {
  userLogin: (data: Payload<User>) => {
    const userApi = apiRoutes.auth.login;
    const formData = new FormData();
    formData.append("email", data.data.email);
    formData.append("password", data.data.password);
   
    return request({
      path: userApi.path,
      data: formData,
      method: userApi.method,
    });
  },
  userLogout: (data: Payload<User>) => {
    const userApi = apiRoutes.auth.logout;
    return request({
      path: userApi.path,
      params: data.params,
      method: userApi.method,
    });
  },
  userSession: () => {
    const userApi = apiRoutes.auth.session;
    return request({
      path: userApi.path,
      method: userApi.method,
    });
  },
};
