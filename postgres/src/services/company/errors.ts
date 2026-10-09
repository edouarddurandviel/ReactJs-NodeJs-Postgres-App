import { CustomResponse } from "./response";

export class ComapnyNotFoundError extends Error {
  statusCode = CustomResponse.HTTP_NOT_FOUND;
  constructor() {
    super(`Company not found`);
    this.name = "ComapnyNotFoundError";
  }
}

export class ComapniesNotFoundError extends Error {
  statusCode = CustomResponse.HTTP_NOT_FOUND;
  constructor() {
    super(`Companies not found`);
    this.name = "ComapniesNotFoundError";
  }
}

export class CompaniesBadRequestError extends Error {
  statusCode = CustomResponse.HTTP_BAD_REQUEST;
  constructor() {
    super(`Could not create company`);
    this.name = "CompaniesBadRequestError";
  }
}