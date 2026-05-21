import express, { Request, Response } from "express";
import CompanyController from "@controllers/company";
import * as companySchemas from "@schemas/company";
import * as generalSchemas from "@schemas/general";
import { handleErrors } from "@libs/server";
import { ExtendedRequest } from "../../_interfaces/requests";
import { Server } from "socket.io";

export default (io: Server) => {
  const router = express.Router();
  const companyServices = new CompanyController(io);

  // Write
  router.post("/create", async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await companySchemas.fullCompany.validateAsync(req.body);
      const result = await companyServices.createOneCompany(data);

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(error);
    }
  });

  router.post("/addresses/create/:companyId", async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await companySchemas.addAddress.validateAsync(req.body);
      const companyId = await generalSchemas.numberSchema.validateAsync(req.params.companyId);
      await companyServices.createOneCompanyAddress(companyId, data);

      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(error);
    }
  });

  router.patch("/replace/:companyId", async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await companySchemas.fullCompany.validateAsync(req.body);
      const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);

      await companyServices.replaceOneCompany(companyId, data);

      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(error);
    }
  });

  router.patch("/update/:companyId", async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await companySchemas.updateCompany.validateAsync(req.body);
      const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);

      const result = await companyServices.updateOneCompany(companyId, data);

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(error);
    }
  });

  router.delete("/delete/:companyId", async (req: Request, res: Response) => {
    try {
      const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);

      const result = await companyServices.deleteOneCompany(companyId);

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(error);
    }
  });

  router.get("/all", async (req: ExtendedRequest, res: Response) => {
    try {
      const result = await companyServices.getCompanies();

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(error);
    }
  });

  router.get("/one/:companyId", async (req: ExtendedRequest, res: Response) => {
    try {
      const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);
      const result = await companyServices.getOneCompany(companyId);

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      console.log(error);
      handleErrors(error);
    }
  });

  return router;
};
