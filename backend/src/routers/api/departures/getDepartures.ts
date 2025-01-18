import { PekaGetTimesResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getDepartures(bollardSymbol: string): Promise<PekaGetTimesResponse> {
    const result = await pekaRequest<PekaGetTimesResponse>("getTimes", { symbol: bollardSymbol });
    return result;
}