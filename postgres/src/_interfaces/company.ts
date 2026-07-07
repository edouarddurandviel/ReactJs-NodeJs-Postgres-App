export type CompanySocket = {
  refreshCompany: (userId: string, params: any) => void;
  refreshCompanyAddress: (addrId: string, params: any) => void;
  closeConnection: () => void;
};

export type CreateCompany = {
  name: string;
  activity: string;
  owner: string;
  imgpath?: string;
};

export type Address = {
  street: string;
  postcode: number;
  city: string;
  filePath: string;
};

export type CreateManyCompanies = Array<{
  ref: string;
  name: string;
  isoCode: string;
}>;
