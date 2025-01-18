import { NodeStopsResponse, NodeBollardsResponse, NodeDeparturesResponse, PekaGetStopPointsResponse, PekaGetBollardsResponse, PekaGetTimesResponse } from "../../../../types/responses";
import ApiInterface from "../ApiInterface";
import { convertBollardsResponse, convertDeparturesResponse, convertStopsResponse } from "./converters";
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

    async getDepartures(symbol: string): Promise<NodeDeparturesResponse> {
        const result = await pekaRequest<PekaGetTimesResponse>("getTimes", { symbol: symbol });
        return convertDeparturesResponse(result);
    }
}

const pekaApiInterface = new PekaApiInterface();
export default pekaApiInterface;