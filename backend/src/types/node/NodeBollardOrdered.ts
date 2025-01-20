import NodeBollard from "./NodeBollard";

/** Simplified representation of BollardOrdered, without unnecessary properties provided by the server. */
export default interface NodeBollardOrdered extends NodeBollard {
    orderNo: number
};