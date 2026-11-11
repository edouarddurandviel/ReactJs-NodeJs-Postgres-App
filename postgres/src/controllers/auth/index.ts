import express, { Request, Response } from "express";
import * as userSchemas from "@src/_joiSchemas/users";
import { handleErrors } from "@src/_lib/server";
import UserController from "@src/services/user";

export default () => {
  const router = express.Router({
    mergeParams: false,
    caseSensitive: true,
    strict: true
  });

  const userServices = new UserController();

  router.post("/login", async (req: Request, res: Response) => {
    try {

      const user = await userSchemas.userAuth.validateAsync(req.body);

      const maxAge = 7 * 24 * 60 * 60 * 1000;
      const result = await userServices.login(user.email, user.password, maxAge);

      res.cookie("jwt", result.token, {
        maxAge: maxAge,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/"
      });

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  router.post("/logout/:userId", async (req: Request, res: Response) => {
    try {
      const data = await userSchemas.idSchema.validateAsync(req.params.userId);
      await userServices.logout(data);

      res.clearCookie("jwt");
      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  return router;
};
