import { GetBollardsResponse } from "../../../types/responses";
import pekaRequest from "../pekaRequest";

export default async function getBollards(stopName: string): Promise<GetBollardsResponse> {
    const result = await pekaRequest<GetBollardsResponse>("getBollardsByStopPoint", { name: stopName });
    return result;
}