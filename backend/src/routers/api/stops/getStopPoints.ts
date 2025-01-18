import { GetStopPointsResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getStopPoints(keyword: string): Promise<GetStopPointsResponse> {
    const result = await pekaRequest<GetStopPointsResponse>("getStopPoints", { pattern: keyword });
    return result;
}