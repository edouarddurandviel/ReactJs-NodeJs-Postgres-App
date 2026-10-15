import { Address, CreateCompany } from "@interfaces/company";
import * as companyActions from "@services/company/actions";
import * as companySockets from "@services/company/sockets/clients";
import path from "path";
import { open } from "fs/promises";
import { saveImageResizedFile } from "@services/company/images";
import { CompaniesFilesBadRequestError } from "@services/company/httpErrors";
// import eventEmitter from "@libs/eventEmitter";
// import emitter from "@services/company/emitters/company";

class CompanyController {
  constructor() {}

  public async getOneCompany(companyId: number) {
    const result = await companyActions.getOneCompany(companyId);

    return result;
  }

  public async getCompanies() {
    const companies = await companyActions.getAllCompanies();

    // emitter.task("task", {
    //   instruction: "Do something",
    //   from: "Edouard",
    //   data: Date.now()
    // });

    // emitter.mail("mail", {
    //   userId: 6
    // });

    return companies;
  }

  public async createOneCompany(company: CreateCompany, file?: any) {
    if (file) {
      const createdFile = await saveImageResizedFile(file, 300, 200);
      company.imgpath = createdFile.outputFileName;

      await companyActions.createOneCompany(company);

      companySockets.reloadCompanies();
    } else {
      throw new CompaniesFilesBadRequestError();
    }
  }

  public async createOneCompanyAddress(companyId: number, address: Address) {
    await companyActions.createOneCompanyAddress(companyId, address);

    companySockets.reloadCompanies();
  }

  public async updateOneCompany(companyId: number, data: CreateCompany, file?: any) {
    if (file) {
      const currentFile = await companyActions.getOneCompany(companyId);
      const createdFile = await saveImageResizedFile(file, 300, 200, currentFile.imgpath);
      data.imgpath = createdFile.outputFileName;
    }

    await companyActions.updateOneCompany(companyId, data);

    companySockets.reloadCompanies();
  }

  public async replaceOneCompany(companyId: number, data: CreateCompany, file: any) {
    if (file) {
      const createdFile = await saveImageResizedFile(file, 300, 200);
      data.imgpath = createdFile.outputFileName;
    }
    await companyActions.replaceOneCompany(companyId, data);

    companySockets.reloadCompanies();
  }

  public async deleteOneCompany(companyId: string) {
    await companyActions.deleteOneCompany(companyId);

    companySockets.reloadCompanies();
  }

  public async getCompanyLogs() {
    const docPath = path.resolve("isolate-000001A595F92050-14492-v8.log");
    const doc = await open(docPath);
    for await (const line of doc.readLines()) {
      console.log(line);
    }

    return doc;
  }
}

export default CompanyController;
