import { Company } from "../../../models/company";
import { Address, CreateCompany, CreateManyCompanies } from "../../../_interfaces/company";
import { findAll, findOne, destroy, update, bulkCreate, findOrCreate, create } from "@libs/queries";
import { dbErrors } from "@libs/sequelize";

// READ
export const getAllCompanies = async () => {
  try {
    const companies = await findAll<Company>("Company", {
      include: [
        {
          association: "addresses"
        }
      ]
    });
    return companies;
  } catch (err: any) {
    return dbErrors(err);
  }
};

// WRITE
export const createOneCompany = async (data: CreateCompany) => {
  try {
    const company = await create<Company>("Company", data);
    return company;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const createOneCompanyAddress = async (companyId: number, data: Address) => {
  try {
    console.log(data);
    const company = await findOne<Company>("Company", {
      where: {
        id: companyId
      }
    });
    await company?.createAddress({ ...data });
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const insertManyCompanies = async (data: CreateManyCompanies) => {
  try {
    const companies = await bulkCreate<Company>("Company", [...data], { updateOnDuplicate: true });
    return companies;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const replaceOneCompany = async (companyId: number, data: CreateCompany) => {
  try {
    const response = await update<Company>("Company", { where: { id: companyId } }, data);

    return response;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const getOneCompany = async (companyId: number) => {
  const company = await findOne<Company>("Company", {
    where: {
      id: companyId
    }
  });

  if (!company) throw new Error(`Company ${companyId} not found`);

  return company;
};

export const updateOneCompany = async (companyId: number, data: any) => {
  console.log(data)
  try {
    const document = await update<Company>("Company", data, {
      where: {
        id: companyId
      }
    });

    return document;
  } catch (err: any) {
    return dbErrors(err);
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
    return dbErrors(err);
  }
};
