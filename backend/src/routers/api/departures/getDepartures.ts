import { GetTimesResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getDepartures(bollardSymbol: string): Promise<GetTimesResponse> {
    const result = await pekaRequest<GetTimesResponse>("getTimes", { symbol: bollardSymbol });
    return result;
}