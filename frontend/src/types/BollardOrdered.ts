import Bollard from "./Bollard";

/** Simplified representation of BollardOrdered, without unnecessary properties provided by the server. */
export default interface BollardOrdered extends Bollard {
    orderNo: number
};