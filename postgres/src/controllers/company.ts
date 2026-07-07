import { Server } from "socket.io";
import { Address, CreateCompany } from "../_interfaces/company";
import * as companyActions from "@services/company/actions";
import * as companySockets from "@services/company/sockets/clients";
import CompanyAdminSocket from "@services/company/sockets/admin";
import path from "path";
import { open } from "fs/promises";
import { saveImageResizedFile } from "@services/company/images";
import eventEmitter from "@libs/eventEmitter";
import { getOneCompany } from "@services/company/actions";

class CompanyController {
  private _io;
  private admin;

  constructor(io: Server) {
    this._io = io;
    this.admin = new CompanyAdminSocket();
  }

  public async getOneCompany(companyId: number) {
    const result = await companyActions.getOneCompany(companyId);

    return result;
  }

  public async getCompanies() {
    const companies = await companyActions.getAllCompanies();
    return companies;
  }

  public async createOneCompany(company: CreateCompany, file?: any) {
    if (file) {
      const createdFile = await saveImageResizedFile(file, 300, 200);
      company.imgpath = createdFile.outputFileName;
    }
    await companyActions.createOneCompany(company);

    companySockets.reloadCompanies();
  }

  public async createOneCompanyAddress(companyId: number, address: Address) {
    await companyActions.createOneCompanyAddress(Number(companyId), address);

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
