import { StopsResponse, BollardsResponse, DeparturesResponse, LineStopsResponse } from "../../types/responses";

export default interface ApiService {
    getStops(keyword: string): Promise<StopsResponse>;
    getBollards(name: string): Promise<BollardsResponse>;
    getDepartures(symbol: string, lineNumbers?: string[]): Promise<DeparturesResponse>;
    getLines(keyword: string): Promise<string[]>;
    getLine(line: string): Promise<LineStopsResponse>;
}