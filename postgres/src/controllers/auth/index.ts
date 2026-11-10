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


  router.get("/login", async (req: Request, res: Response) => {
    try {
      const email = await userSchemas.textSchema.validateAsync(req.query.email);
      const password = await userSchemas.textSchema.validateAsync(req.query.password);

      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      const result = await userServices.login(email, password, maxAge);

      res.cookie("jwt", result.token, {
        maxAge: maxAge,
        httpOnly: true,
        secure: false,
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
