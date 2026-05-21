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
    const token = (await userActions.getUserTokenWithId(req.cookies.jwt)) as Token;
    if (token) {
      const secret = process.env.ENV_SECRET;
      if (secret) {
        const decode = (await jwt.verify(token.token, secret)) as any;
        if (decode) {
          const isValid = decode && new Date(decode.exp).getTime() < new Date().getTime();
          if (isValid) {
            req.User_Id = decode.userId;
            next();
          }
        }
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
