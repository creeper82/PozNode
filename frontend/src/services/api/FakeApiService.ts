import BollardOrdered from "../../types/BollardOrdered";
import { StopsResponse, BollardsResponse, DeparturesResponse, LineStopsResponse } from "../../types/responses";
import ApiService from "./ApiService";

export default class FakeApiService implements ApiService {
    constructor() { }

    async getStops(_keyword: string): Promise<StopsResponse> {
        return Promise.resolve<StopsResponse>([{ name: "Metal St", symbol: "s1" }, { name: "Oakville", symbol: "s2" }]);
    }
    async getBollards(_name: string): Promise<BollardsResponse> {
        return Promise.resolve<BollardsResponse>([{
            name: "Bollard 1", symbol: "BLD01", directions: [
                { lineName: "T1", direction: "Fakeland" },
                { lineName: "T3", direction: "Heaven Depot" }
            ]
        }, {
            name: "Bollard 1", symbol: "BLD02", directions: [
                { lineName: "T2", direction: "Poland" },
                { lineName: "101", direction: "Nowhereland" },
                { lineName: "T1", direction: "Sehenswürdigkeitenlandeskunden" }
            ]
        }]);
    }
    async getDepartures(_symbol: string, _lineNumbers?: string[]): Promise<DeparturesResponse> {
        return Promise.resolve<DeparturesResponse>(
            {
                announcements: [],
                bollardName: "nah",
                bollardSymbol: "nah01",
                departures: [
                    { departure: "00:00", direction: "Test", line: "T1", minutes: 0, onStopPoint: true, realTime: true },
                    { departure: "00:02", direction: "Test2", line: "T2", minutes: 2, onStopPoint: false, realTime: true },
                    { departure: "00:34", direction: "Test3", line: "TX3", minutes: 34, onStopPoint: false, realTime: false },
                ]
            }
        );
    }
    async getLines(_keyword: string): Promise<string[]> {
        return Promise.resolve(["T1", "T2", "TX3", "101"]);
    }
    async getLine(_line: string): Promise<LineStopsResponse> {
        return Promise.resolve<LineStopsResponse>([
            { bollards: fakeLine, direction: "Testland" },
            { bollards: fakeLine, direction: "Testland2" },
            { bollards: fakeLine, direction: "Depot" },
        ]);
    }
}

const fakeLine: BollardOrdered[] = [
    { name: "First stop", symbol: "s1", orderNo: 1 },
    { name: "Second stop", symbol: "s2", orderNo: 2 },
    { name: "Depot", symbol: "t1", orderNo: 3 },
];