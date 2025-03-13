import { ExternalServerError, MissingParameterError, ResourceNotFoundError } from "../../types/errors";
import { StopsResponse, BollardsResponse, DeparturesResponse, LineStopsResponse } from "../../types/responses";
import { VALUES } from "../../values";
import ApiService from "./ApiService";

type FetchJsonHandler = <T>(url: string) => Promise<T>;

export default class PozNodeApiService implements ApiService {
    _fetchJsonHandler: FetchJsonHandler;

    constructor(fetchJsonHandler: FetchJsonHandler = PozNodeFetchJsonHandler) {
        this._fetchJsonHandler = fetchJsonHandler;
    }

    async getStops(keyword: string): Promise<StopsResponse> {
        return await this._fetchJsonHandler(`stops?q=${keyword}`);
    }
    async getBollards(name: string): Promise<BollardsResponse> {
        return await this._fetchJsonHandler(`bollards?name=${name}`);
    }
    async getDepartures(symbol: string, lineNumbers?: string[]): Promise<DeparturesResponse> {
        if (lineNumbers && lineNumbers.length > 0) {
            return await this._fetchJsonHandler(`departures?bollard_symbol=${symbol}&lines=${lineNumbers.join(",")}`);
        } else
            return await this._fetchJsonHandler(`departures?bollard_symbol=${symbol}`);
    }
    async getLines(keyword: string): Promise<string[]> {
        return await this._fetchJsonHandler(`lines?q=${keyword}`);
    }
    async getLine(line: string): Promise<LineStopsResponse> {
        return await this._fetchJsonHandler(`line?name=${line}`);
    }
}

const PozNodeFetchJsonHandler: FetchJsonHandler = async <T>(url: string) => {
    const r = await fetch(VALUES.BACKEND_API_URL + url);

    if (r.status == 200) {
        const json: T = await r.json();
        return json;
    }
    if (r.status == 422) {
        throw new MissingParameterError(await r.text());
    }
    else if (r.status == 404) {
        throw new ResourceNotFoundError(await r.text());
    }
    else {
        throw new ExternalServerError(await r.text());
    }

};