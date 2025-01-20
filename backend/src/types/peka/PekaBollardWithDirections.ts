import PekaBollard from "./PekaBollard";
import PekaDirection from "./PekaDirection";

/** Represents a bollard and a list of lines and directions stopping there. */
export default interface PekaBollardWithDirections {
    directions: PekaDirection[];
    bollard: PekaBollard;
}