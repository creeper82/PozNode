import PekaBollard from "./PekaBollard";
import PekaDeparture from "./PekaDeparture";

export default interface PekaBollardWithDepartures {
    bollard: PekaBollard;
    times: PekaDeparture[];
}