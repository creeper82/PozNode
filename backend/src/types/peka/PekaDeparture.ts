/** Contains information about upcoming departure of a vehicle, and possibly about the vehicle itself. */
export default interface PekaDeparture {
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