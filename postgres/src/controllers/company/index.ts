import express, { Request, Response } from "express";
import CompanyController from "@src/services/company";
import * as companySchemas from "@src/_joiSchemas/company";
import * as generalSchemas from "@src/_joiSchemas/general";
import { handleErrors } from "@src/_lib/server";
import { ExtendedRequest } from "@src/_interfaces/requests";
import { upload } from "@src/middleware/downloadImages";
import * as filesManagement from "@src/services/company/images";
import * as companySockets from "@src/services/company/sockets/clients";

export default () => {
  const router = express.Router();
  const companyServices = new CompanyController();

  // Write
  router.post("/create", upload.single("image"), async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await companySchemas.fullCompany.validateAsync(req.body);
      await companyServices.createOneCompany(data, req.file);

      companySockets.reloadCompanies(res);

      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  router.post("/addresses/create/:companyId", async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await companySchemas.addAddress.validateAsync(req.body);
      const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);
      await companyServices.createOneCompanyAddress(parseInt(companyId), data);

      companySockets.reloadCompanies(res);

      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  router.patch(
    "/replace/:companyId",
    upload.single("image"),
    async (req: ExtendedRequest, res: Response) => {
      try {
        const data = await companySchemas.fullCompany.validateAsync(req.body);
        const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);

        await companyServices.replaceOneCompany(parseInt(companyId), data, req.file);

        res.status(200).json({ err: false });
      } catch (error: any) {
        handleErrors(res, error);
      }
    }
  );

  router.patch(
    "/update/:companyId",
    upload.single("image"),
    async (req: ExtendedRequest, res: Response) => {
      try {
        const data = await companySchemas.updateCompany.validateAsync(req.body);
        const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);

        await companyServices.updateOneCompany(parseInt(companyId), data, req.file);

        companySockets.reloadCompanies(res);

        res.status(200).json({ err: false });
      } catch (error: any) {
        handleErrors(res, error);
      } finally {
        filesManagement.deleteFileSession(req.file);
      }
    }
  );

  router.delete("/delete/:companyId", async (req: Request, res: Response) => {
    try {
      const companyId = await generalSchemas.textSchema.validateAsync(req.params.companyId);

      await companyServices.deleteOneCompany(companyId);

      companySockets.reloadCompanies(res);

      res.status(200).json({ err: false });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  router.get("/all", async (req: ExtendedRequest, res: Response) => {
    try {
      const result = await companyServices.getCompanies();

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  router.get("/one/:companyId", async (req: ExtendedRequest, res: Response) => {
    try {
      const companyId = await generalSchemas.numberSchema.validateAsync(req.params.companyId);
      const result = await companyServices.getOneCompany(companyId);

      res.status(200).json({ err: false, data: result });
    } catch (error: any) {
      handleErrors(res, error);
    }
  });

  return router;
};
