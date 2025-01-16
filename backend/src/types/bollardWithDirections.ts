import Bollard from "./bollard";
import Direction from "./direction";

export default interface BollardWithDirections {
    directions: Direction[];
    bollard: Bollard;
}