import Departure from "../../types/Departure";

export default function getDepartureKey(departure: Departure) {
    if (departure.vehicle) return departure.vehicle.id;
    return `${departure.line}_${departure.direction}_${departure.minutes}`;
}