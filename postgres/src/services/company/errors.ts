export class ComapnyNotFoundError extends Error {
    statusCode = 404;
    constructor() {
        super(`Company not found`);
        this.name = "ComapnyNotFoundError";
    }
}

export class ComapniesNotFoundError extends Error {
    statusCode = 404;
    constructor() {
        super(`Companies not found`);
        this.name = "ComapniesNotFoundError";
    }
}

