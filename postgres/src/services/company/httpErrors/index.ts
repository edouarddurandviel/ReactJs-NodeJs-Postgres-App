import { StatusCode } from "@src/_config/statusCode";
import { ValidationError } from 'sequelize';

export class ComapnyNotFoundError extends ValidationError {
  statusCode = StatusCode.HTTP_NOT_FOUND;
  constructor() {
    super('Company not found', []);
    this.name = "ComapnyNotFoundError";
  }
}

export class ComapnyDeleteError extends ValidationError {
  statusCode = StatusCode.HTTP_NOT_FOUND;
  constructor() {
    super(`Company could note be delete`, []);
    this.name = "ComapnyDeleteError";
  }
}

export class ComapniesNotFoundError extends ValidationError {
  statusCode = StatusCode.HTTP_NOT_FOUND;
  constructor() {
    super(`Companies not found`, []);
    this.name = "ComapniesNotFoundError";
  }
}

export class CompaniesBadRequestError extends ValidationError {
  statusCode = StatusCode.HTTP_BAD_REQUEST;
  constructor() {
    super(`Could not create company`, []);
    this.name = "CompaniesBadRequestError";
  }
}

export class CompanyAlreadyExistRequestError extends ValidationError {
  statusCode = StatusCode.HTTP_BAD_REQUEST;

  constructor() {
    super(`Could not create company. It already exist`, []);
    this.name = "ComapnyNotFoundError";
  }
}

export class CompaniesFilesBadRequestError extends ValidationError {
  statusCode = StatusCode.HTTP_BAD_REQUEST;
  constructor() {
    super(`Image files are mandatory`, []);
    this.name = "CompaniesFilesBadRequestError";
  }
}
