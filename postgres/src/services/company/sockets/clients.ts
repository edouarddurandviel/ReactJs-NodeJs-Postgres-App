import { Response } from "express";
import io from "@src/_lib/socketio";

export const reloadCompany = (res: Response, userId: number, params: {}) => {
  res.on("finish", () => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      return io.emit(`company:${userId}`, params);
    }
  });
};

export const reloadCompanies = (res: Response) => {
  res.on("finish", () => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      return io.emit(`company`);
    }
  });
};
