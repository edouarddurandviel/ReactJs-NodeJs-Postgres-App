import { Company } from "@src/models/company";
import { Address, CreateCompany, CreateManyCompanies } from "@src/_interfaces/company";
import {
  findAll,
  findOne,
  destroy,
  update,
  bulkCreate,
  findOrCreate,
  create
} from "@src/_lib/sequelizeModelStatic";
import { manageError } from "@src/_lib/sequelize";
import {
  CompaniesBadRequestError,
  ComapniesNotFoundError,
  ComapnyNotFoundError,
  ComapnyDeleteError
} from "../httpErrors";

// findOne() OR findOne<Company>()
//////////////////////////////////

export const getAllCompanies = async () => {
  const companies: Company[] = await findAll("Company", {
    include: ["addresses"]
  });

  if (!companies) throw new ComapniesNotFoundError();

  return companies;
};

export const createOneCompany = async (data: CreateCompany) => {
  const company: Company | null = await create<Company>("Company", { ...data });

  if (!company) throw new CompaniesBadRequestError();

  return company;
};

export const findOrcreateOneCompany = async (data: Company) => {
  const [company, created] = await findOrCreate<Company>("Company", {
    where: {
      name: data.name
    },
    defaults: data
  });

  if (!company || !created) throw new CompaniesBadRequestError();

  return company;
};

export const createOneCompanyAddress = async (companyId: number, data: Address) => {
  try {
    const company: Company | null = await findOne("Company", {
      where: {
        id: companyId
      }
    });
    if (company) await company.createAddress({ ...data });
  } catch (err: any) {
    return manageError(err);
  }
};

export const deleteOneCompanyAddress = async (companyId: number, addressId: number) => {
  try {
    const result = await destroy("CompanyAddress", {
      where: {
        id: addressId,
        Company_Id: companyId
      }
    });
    return result;
  } catch (err: any) {
    return manageError(err);
  }
};

export const destroyOneCompany = async (companyId: number) => {
  try {
    const result: Company | null = await findOne("Company", {
      where: {
        id: companyId
      }
    });
    if (result) await result.destroy();

    return result;
  } catch (err: any) {
    return manageError(err);
  }
};

export const insertManyCompanies = async (data: CreateManyCompanies) => {
  try {
    const companies: Company[] = await bulkCreate("Company", [...data]);
    return companies;
  } catch (err: any) {
    return manageError(err);
  }
};

export const replaceOneCompany = async (companyId: number, data: CreateCompany) => {
  try {
    const response = await update("Company", data, {
      where: { id: companyId },
      returning: true
    });

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

export const updateOneCompany = async (companyId: number, data: CreateCompany) => {
  try {
    const document = await update<Company>("Company", data, {
      where: {
        id: companyId
      },
      returning: true
    });

    if (document[0] === 0) throw new CompaniesBadRequestError();

    return document[1];
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
    if (document === 0) throw new ComapnyDeleteError();

    return document;
  } catch (err: any) {
    return manageError(err);
  }
};
