/** Contains information about upcoming departure of a vehicle, and possibly about the vehicle itself. */
export default interface PekaDeparture {
    realTime: boolean;
    minutes: Number;
    direction: string;
    onStopPoint: boolean;
    departure: string;
    line: string;

    vehicle?: String;
    lowEntranceBus?: boolean;
    ticketMachine?: boolean;
    lowFloorBus?: boolean;
    charger?: boolean;
    driversTicketMachine?: boolean;
    airCnd?: boolean;
    leRamp?: boolean;
    lfRamp?: boolean;

}