import Departure from "../../types/Departure";

export default function getDepartureKey(departure: Departure) {
    return `${departure.line}_${departure.direction}_${departure.minutes}_${departure.vehicle?.id ?? ""}`;
}