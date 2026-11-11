import axios from "axios";
import type { PathParamsObject, QueryObject } from "./interfaces";
import { urlBuilder } from "./buildUrl";
import config from "../config";

export default async (props: {
  path: string;
  method: string;
  params?: PathParamsObject;
  data?: any;
  query?: QueryObject;
  headers?: boolean;
}) => {
  const { headers = true } = props;

  const apiClient = await axios.create({
    baseURL: config.baseUrl,
    withCredentials: true,
    ...(headers && {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  });

  try {
    const resp = await apiClient.request({
      url: await urlBuilder(props.path, props.params, props.query),
      method: props.method,
      ...(props.data && {data: props.data}),
      validateStatus(status) {
        return status === 200;
      },
    });

    return resp;
  } catch (err: any) {
   
      return err;
  }
};
