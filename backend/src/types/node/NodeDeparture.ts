import NodeVehicle from "./NodeVehicle";

export default interface NodeDeparture {
    line: string;
    direction: string;
    departure: string;
    minutes: number;
    realTime: boolean;
    onStopPoint: boolean;
    vehicle?: NodeVehicle;
}