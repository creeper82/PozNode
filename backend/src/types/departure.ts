export default interface Departure {
    realTime: Boolean;
    minutes: Number;
    direction: string;
    onStopPoint: Boolean;
    departure: string;
    line: string;

    vehicle?: String;
    lowEntranceBus?: Boolean;
    ticketMachine?: Boolean;
    lowFloorBus?: Boolean;
    charger?: Boolean;
    driversTicketMachine?: Boolean;
    airCnd?: Boolean;
    leRamp?: Boolean;
    lfRamp?: Boolean;

}