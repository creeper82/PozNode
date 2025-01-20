import BollardOrdered from "./bollardOrdered";
import Direction from "./direction";

export default interface DirectionWithBollards {
    direction: Direction;
    bollards: BollardOrdered[];
}