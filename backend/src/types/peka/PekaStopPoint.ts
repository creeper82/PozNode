/** Represents a bus stop area, but not a specific bollard. Every bus stop has a few bollards, which finally hold the departures. */
export default interface PekaStopPoint {
    symbol: string;
    name: string;
}