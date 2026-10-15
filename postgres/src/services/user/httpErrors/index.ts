import { StatusCode } from "./statusCodes";

export class ComapnyNotFoundError extends Error {
  statusCode = StatusCode.HTTP_NOT_FOUND;
  constructor() {
    super(`Company not found`);
    this.name = "ComapnyNotFoundError";
  }
}

export class ComapnyDeleteError extends Error {
  statusCode = StatusCode.HTTP_NOT_FOUND;
  constructor() {
    super(`Company could note be delete`);
    this.name = "ComapnyDeleteError";
  }
}

export class ComapniesNotFoundError extends Error {
  statusCode = StatusCode.HTTP_NOT_FOUND;
  constructor() {
    super(`Companies not found`);
    this.name = "ComapniesNotFoundError";
  }
}

export class CompaniesBadRequestError extends Error {
  statusCode = StatusCode.HTTP_BAD_REQUEST;
  constructor() {
    super(`Could not create company`);
    this.name = "CompaniesBadRequestError";
  }
}

export class CompaniesFilesBadRequestError extends Error {
  statusCode = StatusCode.HTTP_BAD_REQUEST;
  constructor() {
    super(`Image files are mandatory`);
    this.name = "CompaniesFilesBadRequestError";
  }
}
