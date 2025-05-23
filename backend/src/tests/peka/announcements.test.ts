import { FetchRequestHandlerType, PekaApiInterface } from "../../routes/api/interfaces/implementation/PekaApiInterface";
import { getFileJson } from "./helpers";

/**
 * Returns a fake fetch request handler accepted by the `PekaApiInterface`,
 * which always returns the specified value.
 * @param jsonToReturn Value to return when a fetch request is supposed to be made.
 * @returns 
 */
function createFakeFetchRequestHandler(jsonToReturn: any): FetchRequestHandlerType {
    return (_method: string, _params: Record<string, any>) => Promise.resolve(jsonToReturn);
}

let apiInterface: PekaApiInterface;



test("announcements are converted properly", async () => {
    const fakePekaResponse = getFileJson("announcements", "peka1.json");
    const expectedConvertedResponse = getFileJson("announcements", "node1.json");

    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(fakePekaResponse));

    const convertedResponse = await apiInterface.getAnnouncements("");

    expect(convertedResponse).toEqual(expectedConvertedResponse);
});

test("announcement response ignores extra properties", async () => {
    const fakePekaResponse = getFileJson("announcements", "peka2.json");
    const expectedConvertedResponse = getFileJson("announcements", "node2.json");

    apiInterface = new PekaApiInterface(createFakeFetchRequestHandler(fakePekaResponse));

    const convertedResponse = await apiInterface.getAnnouncements("");

    expect(convertedResponse).toEqual(expectedConvertedResponse);
});