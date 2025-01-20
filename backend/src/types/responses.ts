import { NodeBollardOrdered } from "./node/NodeBollardOrdered";
import { NodeDirection } from "./node/NodeDirection";
import PekaAnnouncement from "./peka/PekaAnnouncement";
import PekaBollardWithDepartures from "./peka/PekaBollardWithDepartures";
import PekaBollardWithDirections from "./peka/PekaBollardWithDirections";
import PekaDeparture from "./peka/PekaDeparture";
import PekaDirectionWithBollards from "./peka/PekaDirectionWithBollards";
import PekaStopPoint from "./peka/PekaStopPoint";

export type PekaGetTimesResponse = PekaBollardWithDepartures;
export type PekaGetBollardsResponse = { bollards: PekaBollardWithDirections[]; };
export type PekaGetStopPointsResponse = PekaStopPoint[];
export type PekaGetLinesResponse = { name: string; }[];
export type PekaFindMessagesResponse = PekaAnnouncement[];
export type PekaGetBollardsByLineResponse = { directions: PekaDirectionWithBollards[]; };

export type NodeDeparturesResponse = { bollardName: string; bollardSymbol: string; announcements: PekaAnnouncement[]; departures: PekaDeparture[]; };
export type NodeStopsResponse = { symbol: string; name: string; }[];
export type NodeBollardsResponse = { name: string; symbol: string; directions: NodeDirection[]; }[];
export type NodeLineStopsResponse = { direction: string; bollards: NodeBollardOrdered[]; }[];