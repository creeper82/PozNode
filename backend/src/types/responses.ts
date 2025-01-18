import Announcement from "./announcement";
import BollardWithDepartures from "./bollardWithDepartures";
import BollardWithDirections from "./bollardWithDirections";
import Departure from "./departure";
import Direction from "./direction";
import DirectionWithBollards from "./directionWithBollards";
import StopPoint from "./stopPoint";

export type PekaGetTimesResponse = BollardWithDepartures;
export type PekaGetBollardsResponse = { bollards: BollardWithDirections[]; };
export type PekaGetStopPointsResponse = StopPoint[];
export type PekaGetLinesResponse = { name: string; }[];
export type PekaFindMessagesResponse = Announcement[];
export type PekaGetBollardsByLineResponse = { directions: DirectionWithBollards[]; };

export type NodeDeparturesResponse = { bollardName: string; bollardSymbol: string; announcements: Announcement[]; departures: Departure[]; };
export type NodeStopsResponse = { symbol: string; name: string; }[];
export type NodeBollardsResponse = { name: string; symbol: string; directions: Direction[]; }[];
export type NodeLineStopsResponse = { direction: string; bollards: NodeBollardOrdered[]; }[];

/** Simplified representation of BollardOrdered, without unnecessary properties provided by the server. */
type NodeBollardOrdered = {
    name: string,
    symbol: string,
    orderNo: Number
}