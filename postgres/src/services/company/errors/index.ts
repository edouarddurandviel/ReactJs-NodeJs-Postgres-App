import { UniqueConstraintError } from "sequelize";

export class ComapnyNotFoundError extends Error {
  statusCode = 404;
  constructor() {
    super('Company not found');
    this.name = "ComapnyNotFoundError";
  }
}

export class ComapnyDeleteError extends Error {
  statusCode = 404;
  constructor() {
    super(`Company could note be delete`);
    this.name = "ComapnyDeleteError";
  }
}

export class ComapniesNotFoundError extends Error {
  statusCode = 404;
  constructor() {
    super(`Companies not found`);
    this.name = "ComapniesNotFoundError";
  }
}

export class CompaniesBadRequestError extends Error {
  statusCode = 400;
  constructor() {
    super(`Could not create company`);
    this.name = "CompaniesBadRequestError";
  }
}

// experiment
export class CompanyAlreadyExistRequestError extends UniqueConstraintError {
  statusCode = 400;
  constructor() {
    super({ message: `Could not create company. It already exist` });
    this.name = "CompanyAlreadyExistRequestError";
  }
}

export class CompaniesFilesBadRequestError extends Error {
  statusCode = 400;
  constructor() {
    super(`Image files are mandatory`);
    this.name = "CompaniesFilesBadRequestError";
  }
}
