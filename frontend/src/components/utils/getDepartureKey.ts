import Departure from "../../types/Departure";

export default function getDepartureKey(departure: Departure) {
    if (departure.vehicle) return `${departure.vehicle.id}_${departure.line}_${departure.direction}_${departure.minutes}`;
    return `${departure.line}_${departure.direction}_${departure.minutes}`;
}