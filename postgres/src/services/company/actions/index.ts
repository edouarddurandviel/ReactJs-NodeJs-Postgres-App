import { Company } from "../../../models/company";
import { Address, CreateCompany, CreateManyCompanies } from "@interfaces/company";
import {
  findAll,
  findOne,
  destroy,
  update,
  bulkCreate,
  findOrCreate,
  create
} from "@libs/modelStatic";
import { manageError } from "@libs/sequelize";
import { CompaniesBadRequestError, ComapniesNotFoundError, ComapnyNotFoundError } from "../errors";

// READ
export const getAllCompanies = async () => {
  const companies = await findAll<Company>("Company", {
    include: ["addresses"]
  });

  if (!companies) throw new ComapniesNotFoundError();

  return companies;
};

// WRITE
export const createOneCompany = async (data: CreateCompany) => {
  const company = await create<Company>("Company", data);

  if (!company) throw new CompaniesBadRequestError();

  return company;
};

export const createOneCompanyAddress = async (companyId: number, data: Address) => {
  try {
    const company = await findOne<Company>("Company", {
      where: {
        id: companyId
      }
    });
    await company?.createAddress({ ...data });
  } catch (err: any) {
    return manageError(err);
  }
};

export const insertManyCompanies = async (data: CreateManyCompanies) => {
  try {
    const companies = await bulkCreate<Company>("Company", [...data], { updateOnDuplicate: true });
    return companies;
  } catch (err: any) {
    return manageError(err);
  }
};

export const replaceOneCompany = async (companyId: number, data: CreateCompany) => {
  try {
    const response = await update<Company>("Company", { where: { id: companyId } }, data);

    return response;
  } catch (err: any) {
    return manageError(err);
  }
};

export const getOneCompany = async (companyId: number) => {
  const company = await findOne<Company>("Company", {
    where: {
      id: companyId
    }
  });

  if (!company) throw new ComapnyNotFoundError();

  return company;
};

export const updateOneCompany = async (companyId: number, data: any) => {
  try {
    const document = await update<Company>("Company", data, {
      where: {
        id: companyId
      }
    });
    return document;
  } catch (err: any) {
    return manageError(err);
  }
};

export const deleteOneCompany = async (companyId: string) => {
  try {
    const document = await destroy("Company", {
      where: {
        id: companyId
      }
    });
    return document;
  } catch (err: any) {
    return manageError(err);
  }
};
