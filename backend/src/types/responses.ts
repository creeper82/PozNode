import Announcement from "./announcement";
import BollardWithDepartures from "./bollardWithDepartures";
import BollardWithDirections from "./bollardWithDirections";
import DirectionWithBollards from "./directionWithBollards";
import StopPoint from "./stopPoint";

export type GetTimesResponse = BollardWithDepartures;
export type GetBollardsResponse = { bollards: BollardWithDirections[]; };
export type GetStopPointsResponse = StopPoint[];
export type GetLinesResponse = { name: string; }[];
export type FindMessagesResponse = Announcement[];
export type GetBollardsByLineResponse = { directions: DirectionWithBollards[]; };