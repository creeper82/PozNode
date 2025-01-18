import { GetStopPointsResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getStopPoints(keyword: string): Promise<GetStopPointsResponse> {
    const result = await pekaRequest("getStopPoints", { pattern: keyword });
    if (!("success" in result)) throw Error("Expected a successful response.");
    return result.success;
}