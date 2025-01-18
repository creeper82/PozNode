import { PekaGetStopPointsResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getStopPoints(keyword: string): Promise<PekaGetStopPointsResponse> {
    const result = await pekaRequest<PekaGetStopPointsResponse>("getStopPoints", { pattern: keyword });
    return result;
}