import NodeVehicle from "./Vehicle";

export default interface Departure {
    line: string;
    direction: string;
    departure: string;
    minutes: number;
    realTime: boolean;
    onStopPoint: boolean;
    vehicle?: NodeVehicle;
}