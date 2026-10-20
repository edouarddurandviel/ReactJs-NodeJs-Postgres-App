import { Response } from "express";
import io from "@src/_lib/socketio";

export const reloadUser = (res: Response, userId: number, params: {}) => {
  res.on("finish", () => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      return io.emit(`user:${userId}`, params);
    }
  });
};

export const reloadUsers = (res: Response) => {
  res.on("finish", () => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      return io.emit(`user`);
    }
  });
};
