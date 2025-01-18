import { NodeBollardsResponse, NodeDeparturesResponse, NodeStopsResponse } from "../../../types/responses";

export default interface ApiInterface {
    getStops(keyword: string): Promise<NodeStopsResponse>;
    getBollards(name: string): Promise<NodeBollardsResponse>;
    getDepartures(symbol: string): Promise<NodeDeparturesResponse>;
    getLines(keyword: string): Promise<string[]>;
}