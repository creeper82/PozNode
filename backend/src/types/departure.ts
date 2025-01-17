export default interface Departure {
    realTime: Boolean;
    driversTicketMachine?: Boolean;
    minutes: Number;
    direction: string;
    lowFloorBus?: Boolean;
    onStopPoint: Boolean;
    departure: string;
    line: string;
    lowEntranceBus?: Boolean;
    ticketMachine?: Boolean;
}