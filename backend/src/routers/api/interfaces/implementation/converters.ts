import { NodeBollardsResponse, NodeDeparturesResponse, NodeStopsResponse, PekaGetBollardsResponse, PekaGetStopPointsResponse, PekaGetTimesResponse } from "../../../../types/responses";

export function convertStopsResponse(pekaResponse: PekaGetStopPointsResponse): NodeStopsResponse {
    return pekaResponse;
}

export function convertBollardsResponse(pekaResponse: PekaGetBollardsResponse): NodeBollardsResponse {
    if ("bollards" in pekaResponse) {
        return (pekaResponse.bollards.map(entry => ({
            name: entry.bollard.name,
            // There is some mistake in the API - symbol and tag seems to be swapped?
            symbol: entry.bollard.tag,
            directions: entry.directions
        })));
    }
    else return [];
}

export function convertDeparturesResponse(pekaResponse: PekaGetTimesResponse): NodeDeparturesResponse {
    pekaResponse.times.forEach(time => {
        time.departure = convertTimestamp(time.departure);
    });

    return {
        bollardName: pekaResponse.bollard.name,
        bollardSymbol: pekaResponse.bollard.symbol,
        departures: pekaResponse.times
    };
}

function convertTimestamp(fullTimestamp: string): string {
    return fullTimestamp.slice(fullTimestamp.indexOf("T") + 1, fullTimestamp.indexOf(":00"));
}