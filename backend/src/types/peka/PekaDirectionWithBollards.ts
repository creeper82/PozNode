import PekaBollardOrdered from "./PekaBollardOrdered";
import PekaDirection from "./PekaDirection";

export default interface PekaDirectionWithBollards {
    direction: PekaDirection;
    bollards: PekaBollardOrdered[];
}