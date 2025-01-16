export default interface Departure {
    realTime: Boolean;
    driversTicketMachine?: Boolean;
    minutes: Number;
    direction: String;
    lowFloorBus?: Boolean;
    onStopPoint: Boolean;
    departure: String;
    line: String;
    lowEntranceBus?: Boolean;
    ticketMachine?: Boolean;
}