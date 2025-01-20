import PekaBollard from "./PekaBollard";

/** Represents a bollard and the sequence number when it appears on a line. */
export default interface PekaBollardOrdered extends PekaBollard {
    orderNo: number;
}