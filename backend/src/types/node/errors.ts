export class ResourceNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ResourceNotFoundError";
    }
}

export class ExternalServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ExternalServerError";
    }
}