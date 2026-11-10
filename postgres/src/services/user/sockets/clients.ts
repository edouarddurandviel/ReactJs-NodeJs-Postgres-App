import { Response } from "express";
import io from "@src/_lib/socketio";
import { noServerError } from "@src/_lib/server";

// wait request has finished and has no errors to emit
// message and send it to the front.

export const reloadUser = (res: Response, userId: number, params: {}) => {
  res.on("finish", () => {
    if (noServerError(res.statusCode)) {
      return io.emit(`user:${userId}`, params);
    }
  });
};

export const reloadUsers = (res: Response) => {
  res.on("finish", () => {
    if (noServerError(res.statusCode)) {
      return io.emit(`user`);
    }
  });
};
