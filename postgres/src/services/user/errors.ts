export class UserNotFoundError extends Error {
    statusCode = 404;
    constructor() {
        super(`User not found`);
        this.name = "UserNotFoundError";
    }
}

export class UserTokenNotFoundError extends Error {
    statusCode = 404;
    constructor(token: string) {
        super(`User token not found ${token}`);
        this.name = "UserTokenNotFoundError";
    }
}

export class UserBadRequestError extends Error {
    statusCode = 400;
    constructor() {
        super(`Bad Request: could not create user`);
        this.name = "UserBadRequestError";
    }
}

export class UserTokenBadRequestError extends Error {
    statusCode = 400;
    constructor(user: number) {
        super(`Bad Request: could not create token for this user: ${user}`);
        this.name = "UserTokenBadRequestError";
    }
}

