import { NodeBollardsResponse, NodeDeparturesResponse, NodeLineStopsResponse, NodeStopsResponse } from "../../../types/responses";

/** Represents a general set of methods used to fetch data from the API. */
export default interface ApiInterface {
    getStops(keyword: string): Promise<NodeStopsResponse>;
    getBollards(name: string): Promise<NodeBollardsResponse>;
    getDepartures(symbol: string): Promise<NodeDeparturesResponse>;
    getLines(keyword: string): Promise<string[]>;
    getLine(line: string): Promise<NodeLineStopsResponse>;
}