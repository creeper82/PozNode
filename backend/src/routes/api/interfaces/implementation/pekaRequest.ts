import { PekaEmptyResponse, PekaFailure } from "../../../../types/peka/errors";
import { VALUES } from "../../../../values";

/** Sends a request to the PEKA Virtual Monitor API. If successful, returns the content inside the `success` property. Otherwise, throws an error. */
export default async function pekaRequest<ResultType>(method: string, params: Record<string, any>): Promise<ResultType> {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    const body = new URLSearchParams({
        method: method,
        p0: JSON.stringify(params),
    });

    const r = await fetch(VALUES.PEKA_VM_URL, {
        method: "POST",
        headers: headers,
        body: body
    });

    const json = await r.json();

    if ("success" in json) return json.success;
    if ("failure" in json) throw new PekaFailure("PEKA server responded with failure: " + json.failure);
    throw new PekaEmptyResponse("Received empty response. Method possibly doesn't exist, or the server is down.");
}