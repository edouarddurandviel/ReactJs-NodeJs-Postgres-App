import { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";
import { NotFound } from "http-json-errors";
import * as userActions from "@services/user/actions";
import { Token } from "../models/token";

export const sessionToken: RequestHandler = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  try {
    const user = (await userActions.getUserTokenWithId(req.cookies.jwt)) as Token;
    if (user) {
      // should check user in DB
      const decode = (await jwt.decode(user!.token)) as any;
      const isValid = new Date(decode.exp).getTime() < new Date().getTime();
      if (isValid) {
        req.user = user;
        next();
      } else {
        throw new NotFound("Session expiry");
      }
    } else {
      throw new NotFound("Unauthorized session token");
    }
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
