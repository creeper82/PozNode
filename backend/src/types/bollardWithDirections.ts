import Bollard from "./bollard";
import Direction from "./direction";

/** Represents a bollard and a list of lines and directions stopping there. */
export default interface BollardWithDirections {
    directions: Direction[];
    bollard: Bollard;
}