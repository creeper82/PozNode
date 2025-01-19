import { ExternalServerError, ResourceNotFoundError } from "../../../../types/node/errors";
import Announcement from "../../../../types/peka/announcement";
import { PekaEmptyResponse, PekaFailure } from "../../../../types/peka/errors";
import { NodeStopsResponse, NodeBollardsResponse, NodeDeparturesResponse, PekaGetStopPointsResponse, PekaGetBollardsResponse, PekaGetTimesResponse, PekaGetLinesResponse, NodeLineStopsResponse, PekaGetBollardsByLineResponse } from "../../../../types/responses";
import ApiInterface from "../ApiInterface";
import { convertBollardsResponse, convertDeparturesResponse, convertLinesResponse, convertLineStopsResponse, convertStopsResponse } from "./converters";
import pekaRequest from "./pekaRequest";

/** Implementation of the interface, used to retrieve information from the PEKA Virtual Monitor API. */
class PekaApiInterface implements ApiInterface {
    async getStops(keyword: string): Promise<NodeStopsResponse> {
        try {
            const result = await pekaRequest<PekaGetStopPointsResponse>("getStopPoints", { pattern: keyword });
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
            const result = await pekaRequest<PekaGetBollardsResponse>("getBollardsByStopPoint", { name: name });
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
            const result = await pekaRequest<PekaGetLinesResponse>("getLines", { pattern: keyword });
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
            const result = await pekaRequest<PekaGetBollardsByLineResponse>("getBollardsByLine", { name: line });
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

    async getDepartures(symbol: string): Promise<NodeDeparturesResponse> {
        try {
            const result = await pekaRequest<PekaGetTimesResponse>("getTimes", { symbol: symbol });
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

    async getAnnouncements(symbol: string): Promise<Announcement[]> {
        const result = await pekaRequest<Announcement[]>("findMessagesForBollard", { symbol: symbol });

        return result.map(announcement => ({
            content: announcement.content,
            startDate: announcement.startDate.substring(0, 10),
            endDate: announcement.endDate.substring(0, 10)
        }));
    }
}

const pekaApiInterface = new PekaApiInterface();
export default pekaApiInterface;