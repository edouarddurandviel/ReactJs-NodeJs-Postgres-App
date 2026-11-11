import { Response } from "express";
import io from "@src/_lib/socketio";
import { noServerError } from "@src/_lib/server";

export const reloadCompany = (res: Response, userId: number, params: {}) => {
  res.on("finish", () => {
    if (noServerError(res.statusCode)) {
      return io.emit(`company:${userId}`, params);
    }
  });
};

export const reloadCompanies = (res: Response) => {
  res.on("finish", () => {
    if (noServerError(res.statusCode)) {
      return io.emit(`company`);
    }
  });
};
