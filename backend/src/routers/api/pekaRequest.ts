import FailureResponse from "../../types/failureResponse";
import SuccessResponse from "../../types/successResponse";

export default async function pekaRequest(method: string, params: Object): Promise<SuccessResponse<any> | FailureResponse> {
    const url = "https://www.peka.poznan.pl/vm/method.vm";
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    const body = new URLSearchParams({
        method: method,
        p0: JSON.stringify(params),
    });

    const r = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body
    });

    return r.json();
}