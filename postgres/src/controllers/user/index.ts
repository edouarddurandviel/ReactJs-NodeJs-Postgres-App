import express, { Request, Response } from "express";
import { ExtendedRequest } from "@src/_interfaces/requests";
import * as userSchemas from "@src/_joiSchemas/users";
import { handleErrors } from "@src/_lib/server";
import UserController from "@src/services/user";
import * as userSockets from "@src/services/user/sockets/clients";

export default () => {
  const router = express.Router({
    mergeParams: false,
    caseSensitive: true,
    strict: true
  });

  const userServices = new UserController();

  /* users pages. */
  router.post("/create", async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await userSchemas.user.validateAsync(req.body);
      await userServices.createOneUser(data);

      userSockets.reloadUsers(res);

      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

 

  // router.post("/profil/:userId/create",
  //   //sessionToken,
  //   async (req: Request, res: Response) => {
  //   try {
  //     const userId = await userSchemas.uidSchema.validateAsync(req.params.userId);
  //     const result = await userServices.createProfil(req.body, userId);

  //     res.status(200).json({ err: false, data: result });
  //   } catch (error: any) {
  //     handleErrors(error);
  //   }
  // });

  router.get("/all", async (req: ExtendedRequest, res: Response) => {
    try {
      const result = await userServices.getAllUsers();

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  router.get("/:userId", async (req: ExtendedRequest, res: Response) => {
    try {
      const userId = await userSchemas.userId.validateAsync(req.params.userId);
      const result = await userServices.getUserData(userId);

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  return router;
};
