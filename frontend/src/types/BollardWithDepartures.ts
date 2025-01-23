import Bollard from "./Bollard";
import Departure from "./Departure";

export default interface BollardWithDepartures {
    bollard: Bollard;
    departures: Departure[];
}