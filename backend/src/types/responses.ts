import { NodeBollardOrdered } from "./node/bollardOrdered";
import Announcement from "./peka/announcement";
import BollardWithDepartures from "./peka/bollardWithDepartures";
import BollardWithDirections from "./peka/bollardWithDirections";
import Departure from "./peka/departure";
import Direction from "./peka/direction";
import DirectionWithBollards from "./peka/directionWithBollards";
import StopPoint from "./peka/stopPoint";

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