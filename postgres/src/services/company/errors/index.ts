export class ComapnyNotFoundError extends Error {
  statusCode
  constructor() {
    super();
    this.statusCode =  404;
    this.message = "Company not found";
    this.name = "ComapnyNotFoundError";
  }
}

export class ComapnyDeleteError extends Error {
  statusCode
  constructor() {
    super();
    this.statusCode =  404;
    this.message = "Company could note be delete";
    this.name = "ComapnyDeleteError";
  }
}

export class ComapniesNotFoundError extends Error {
  statusCode;
  constructor() {
    super();
    this.statusCode = 404;
    this.message = "Companies not found";
    this.name = "ComapniesNotFoundError";
  }
}

export class CompaniesBadRequestError extends Error {
  statusCode;
  constructor() {
    super();
    this.statusCode = 404;
    this.message = "Could not create company";
    this.name = "CompaniesBadRequestError";
  }
}

//
export class CompanyAlreadyExistRequestError extends Error {
  statusCode;
  constructor() {
    super();
    this.statusCode = 404;
    this.message = "Could not create company. It already exist";
    this.name = "CompanyAlreadyExistRequestError";
  }
}

export class CompaniesFilesBadRequestError extends Error {
  statusCode;
  constructor() {
    super(`Image files are mandatory`);
    this.statusCode = 404;
    this.message = "Image files are mandatory";
    this.name = "CompaniesFilesBadRequestError";
  }
}
