import Announcement from "./announcement";
import BollardWithDepartures from "./bollardWithDepartures";
import BollardWithDirections from "./bollardWithDirections";
import DirectionWithBollards from "./directionWithBollards";
import FailureResponse from "./failureResponse";
import StopPoint from "./stopPoint";
import SuccessResponse from "./successResponse";

export type GetTimesResponse = SuccessResponse<BollardWithDepartures> | FailureResponse;
export type GetBollardsResponse = SuccessResponse<{ bollards: BollardWithDirections[]; }> | FailureResponse;
export type GetStopPointsResponse = SuccessResponse<StopPoint[]> | FailureResponse;
export type GetLinesResponse = SuccessResponse<{ name: String; }[]> | FailureResponse;
export type FindMessagesResponse = SuccessResponse<Announcement[]> | FailureResponse;
export type GetBollardsByLineResponse = SuccessResponse<{ directions: DirectionWithBollards[]; }> | FailureResponse;