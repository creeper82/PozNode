import Announcement from "../../../../types/announcement";
import { NodeStopsResponse, NodeBollardsResponse, NodeDeparturesResponse, PekaGetStopPointsResponse, PekaGetBollardsResponse, PekaGetTimesResponse, PekaGetLinesResponse } from "../../../../types/responses";
import ApiInterface from "../ApiInterface";
import { convertBollardsResponse, convertDeparturesResponse, convertLinesResponse, convertStopsResponse } from "./converters";
import pekaRequest from "./pekaRequest";

class PekaApiInterface implements ApiInterface {
    async getStops(keyword: string): Promise<NodeStopsResponse> {
        const result = await pekaRequest<PekaGetStopPointsResponse>("getStopPoints", { pattern: keyword });
        return convertStopsResponse(result);
    }

    async getBollards(name: string): Promise<NodeBollardsResponse> {
        const result = await pekaRequest<PekaGetBollardsResponse>("getBollardsByStopPoint", { name: name });
        return convertBollardsResponse(result);
    }

    async getLines(keyword: string): Promise<string[]> {
        const result = await pekaRequest<PekaGetLinesResponse>("getLines", { pattern: keyword });
        return convertLinesResponse(result);
    }

    async getDepartures(symbol: string): Promise<NodeDeparturesResponse> {
        const result = await pekaRequest<PekaGetTimesResponse>("getTimes", { symbol: symbol });
        const converted = convertDeparturesResponse(result);

        converted.announcements = await this.getAnnouncements(symbol).catch(() => []);

        return converted;
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