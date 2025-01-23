import Announcement from "./Announcement";
import BollardOrdered from "./BollardOrdered";
import Departure from "./Departure";
import Direction from "./Direction";
import StopPoint from "./StopPoint";

export type DeparturesResponse = { bollardName: string; bollardSymbol: string; announcements: Announcement[]; departures: Departure[]; };
export type StopsResponse = StopPoint[];
export type BollardsResponse = { name: string; symbol: string; directions: Direction[]; }[];
export type LineStopsResponse = { direction: string; bollards: BollardOrdered[]; }[];