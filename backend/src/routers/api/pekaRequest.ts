export default async function pekaRequest<ResultType>(method: string, params: Object): Promise<ResultType> {
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

    const json = await r.json();

    if ("success" in json) return json.success;
    if ("failure" in json) throw Error("External server error occured! " + json.failure);
    throw Error("Received empty response. Method possibly doesn't exist, or the server is down.");
}