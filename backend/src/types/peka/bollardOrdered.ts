import Bollard from "./bollard";

/** Represents a bollard and the sequence number when it appears on a line. */
export default interface BollardOrdered extends Bollard {
    orderNo: Number;
}