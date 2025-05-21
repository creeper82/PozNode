import { ExternalServerError, ResourceNotFoundError } from "../../../../types/node/errors";
import PekaAnnouncement from "../../../../types/peka/PekaAnnouncement";
import { PekaEmptyResponse, PekaFailure } from "../../../../types/peka/errors";
import { NodeStopsResponse, NodeBollardsResponse, NodeDeparturesResponse, PekaGetStopPointsResponse, PekaGetBollardsResponse, PekaGetTimesResponse, PekaGetLinesResponse, NodeLineStopsResponse, PekaGetBollardsByLineResponse } from "../../../../types/responses";
import ApiInterface from "../ApiInterface";
import { convertBollardsResponse, convertDeparturesResponse, convertLinesResponse, convertLineStopsResponse, convertStopsResponse } from "./converters";
import pekaRequest from "./pekaRequest";

export type FetchRequestHandlerType = <ResultType>(method: string, params: Record<string, any>) => Promise<ResultType>;

/** Implementation of the interface, used to retrieve information from the PEKA Virtual Monitor API. */
export class PekaApiInterface implements ApiInterface {
    /** Sends a request to the PEKA Virtual Monitor API. If successful, returns the content inside the success property. Otherwise, throws an error. */
    fetchRequestHandler: FetchRequestHandlerType;

    constructor(fetchRequestHandler: FetchRequestHandlerType = pekaRequest) {
        this.fetchRequestHandler = fetchRequestHandler;
    }

    async getStops(keyword: string): Promise<NodeStopsResponse> {
        try {
            const result = await this.fetchRequestHandler<PekaGetStopPointsResponse>("getStopPoints", { pattern: keyword });
            return convertStopsResponse(result);
        }
        catch (e: any) {
            if (e instanceof PekaEmptyResponse || e instanceof PekaFailure) {
                throw new ExternalServerError(e.message);
            }
            else throw e;
        }

    }

    async getBollards(name: string): Promise<NodeBollardsResponse> {
        try {
            const result = await this.fetchRequestHandler<PekaGetBollardsResponse>("getBollardsByStopPoint", { name: name });
            return convertBollardsResponse(result);
        } catch (e: any) {
            if (e instanceof PekaEmptyResponse || e instanceof PekaFailure) {
                throw new ExternalServerError(e.message);
            }
            else throw e;
        }
    }

    async getLines(keyword: string): Promise<string[]> {
        try {
            const result = await this.fetchRequestHandler<PekaGetLinesResponse>("getLines", { pattern: keyword });
            return convertLinesResponse(result);
        } catch (e: any) {
            if (e instanceof PekaEmptyResponse || e instanceof PekaFailure) {
                throw new ExternalServerError(e.message);
            }
            else throw e;
        }
    }

    async getLine(line: string): Promise<NodeLineStopsResponse> {
        try {
            const result = await this.fetchRequestHandler<PekaGetBollardsByLineResponse>("getBollardsByLine", { name: line });
            return convertLineStopsResponse(result);
        }
        catch (e: any) {
            if (e instanceof PekaEmptyResponse) {
                throw new ResourceNotFoundError("Received empty response. Either this line was not found, or the PEKA server is down.");
            }
            else if (e instanceof PekaFailure) {
                throw new ExternalServerError(e.message);
            }
            else throw e;
        }
    }

    async getDepartures(symbol: string, lineNumbers?: string[]): Promise<NodeDeparturesResponse> {
        try {
            let result = await this.fetchRequestHandler<PekaGetTimesResponse>("getTimes", { symbol: symbol });

            if (lineNumbers) {
                result.times = result.times.filter(departure => lineNumbers.includes(departure.line));
            }

            const converted = convertDeparturesResponse(result);

            converted.announcements = await this.getAnnouncements(symbol).catch(() => []);

            return converted;
        }
        catch (e: any) {
            if (e instanceof PekaFailure && e.message.includes("brak")) {
                throw new ResourceNotFoundError(`Bollard ${symbol} does not exist.`);
            }
            else if (e instanceof PekaFailure || e instanceof PekaEmptyResponse) {
                throw new ExternalServerError(e.message);
            }
            else throw e;
        }
    }

    async getAnnouncements(symbol: string): Promise<PekaAnnouncement[]> {
        const result = await this.fetchRequestHandler<PekaAnnouncement[]>("findMessagesForBollard", { symbol: symbol });

        return result.map(announcement => ({
            content: stripHtml(announcement.content),
            startDate: announcement.startDate.substring(0, 10),
            endDate: announcement.endDate.substring(0, 10)
        }));

        function stripHtml(x: string) {
            if (x.includes(">") && x.includes("<")) {
                return x.slice(x.indexOf(">") + 1, x.lastIndexOf("<"));
            }

            return x;
        }
    }
}

const pekaApiInterface = new PekaApiInterface();
export default pekaApiInterface;