import { PekaGetBollardsResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getBollards(stopName: string): Promise<PekaGetBollardsResponse> {
    const result = await pekaRequest<PekaGetBollardsResponse>("getBollardsByStopPoint", { name: stopName });
    return result;
}