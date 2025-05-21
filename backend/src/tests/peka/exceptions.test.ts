import { FetchRequestHandlerType, PekaApiInterface } from "../../routes/api/interfaces/implementation/PekaApiInterface";
import { ExternalServerError, ResourceNotFoundError } from "../../types/node/errors";
import { PekaEmptyResponse, PekaFailure } from "../../types/peka/errors";

/**
 * Returns a fake fetch request handler accepted by the `PekaApiInterface`,
 * which always throws a specified error.
 * @param errorToThrow Error that will be thrown when a fetch request is supposed to be made.
 * @returns 
 */
function createFakeFetchRequestHandler(errorToThrow: Error): FetchRequestHandlerType {
    return (_method: string, _params: Record<string, any>) => {
        throw errorToThrow;
    };
}

let apiInterface: PekaApiInterface;

test.each([
    () => apiInterface.getBollards(""),
    () => apiInterface.getDepartures(""),
    () => apiInterface.getLines(""),
    () => apiInterface.getStops("")
])("empty PEKA response translates to an ExternalServerError", (fn) => {
    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(new PekaEmptyResponse("EMPTY")));

    expect(fn).rejects.toThrow(ExternalServerError);
});

test("empty PEKA response at /line translates to a ResourceNotFoundError", () => {
    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(new PekaEmptyResponse("EMPTY")));

    expect(apiInterface.getLine("")).rejects.toThrow(ResourceNotFoundError);
});

class UnknownException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UnknownException";
    }
}

test.each([
    () => apiInterface.getBollards(""),
    () => apiInterface.getDepartures(""),
    () => apiInterface.getLine(""),
    () => apiInterface.getLines(""),
    () => apiInterface.getStops("")
])("unknown exception is propagated unchanged", (fn) => {
    const unknownException = new UnknownException("Weird exception");

    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(unknownException));

    expect(fn).rejects.toThrow(unknownException);
});

test.each([
    () => apiInterface.getBollards(""),
    () => apiInterface.getDepartures(""),
    () => apiInterface.getLine(""),
    () => apiInterface.getLines(""),
    () => apiInterface.getStops("")
])("failure translates to an ExternalServerError", (fn) => {
    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(new PekaFailure("Horrible server failure")));

    expect(fn).rejects.toThrow(ExternalServerError);
});

test("failure with message 'brak' at /departures translates to a ResourceNotFoundError", () => {
    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(new PekaFailure("brak")));

    expect(apiInterface.getDepartures("")).rejects.toThrow(ResourceNotFoundError);
});