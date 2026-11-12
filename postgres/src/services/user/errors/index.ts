export class UserNotFoundError extends Error {
  statusCode = 404;
  constructor() {
    super(`User not found`);
    this.name = "UserNotFoundError";
  }
}

export class UsersNotFoundError extends Error {
  statusCode = 404;
  constructor() {
    super();
    this.message = `Users not found`
    this.name = "UsersNotFoundError";
  }
}

export class UserTokenNotFoundError extends Error {
  statusCode = 404;
  constructor() {
    super();
    this.message = `User token not found`
    this.name = "UserTokenNotFoundError";
  }
}

export class UserBadRequestError extends Error {
  statusCode = 400;
  constructor() {
    super();
    this.message = `Bad Request: could not create user`
    this.name = "UserBadRequestError";
  }
}

export class UserTokenBadRequestError extends Error {
  statusCode = 400;
  constructor(user: number) {
    super();
    this.message = `Bad Request: could not create token for this user: ${user}`;
    this.name = "UserTokenBadRequestError";
  }
}
