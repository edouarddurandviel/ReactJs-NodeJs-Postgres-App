import { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";
import * as userActions from "@src/services/user/actions";
import { Token } from "@src/models/token";

export const sessionToken: RequestHandler = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  try {
    if (req.cookies.jwt) {
      const secret = process.env.ENV_SECRET;
      if (secret) {
        const decode = (await jwt.verify(req.cookies.jwt, secret)) as any;
        if (decode) {
          // could be a shorter generated token or in that case a hidden sessionId 
          const user = (await userActions.getUserTokenWithId(decode.Session_Id)) as Token;
          if (user) {
            req.User_Id = user.id;
            next();
          } else {
            throw "No User found";
          }
        } else {
          throw "Session expiry";
        }
      }
    } else {
      throw "Need a session token";
    }
  } catch (error: any) {
    res.status(401).json({ message: error });
  }
};
