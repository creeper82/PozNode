import Bollard from "./bollard";

export default interface BollardOrdered extends Bollard {
    orderNo: Number;
}