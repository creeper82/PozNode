import Bollard from "./bollard";
import Departure from "./departure";

export default interface BollardWithDepartures {
    bollard: Bollard;
    times: Departure[];
}