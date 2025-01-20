export class PekaFailure extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PekaFailure";
    }
}

export class PekaEmptyResponse extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PekaEmptyResponse";
    }
}