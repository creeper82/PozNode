import { NodeBollardsResponse, NodeDeparturesResponse, NodeLineStopsResponse, NodeStopsResponse, PekaGetBollardsByLineResponse, PekaGetBollardsResponse, PekaGetLinesResponse, PekaGetStopPointsResponse, PekaGetTimesResponse } from "../../../../types/responses";

export function convertStopsResponse(pekaResponse: PekaGetStopPointsResponse): NodeStopsResponse {
    return pekaResponse;
}

export function convertBollardsResponse(pekaResponse: PekaGetBollardsResponse): NodeBollardsResponse {
    if ("bollards" in pekaResponse) {
        return (pekaResponse.bollards.map(entry => ({
            name: entry.bollard.name,
            // There is some mistake in the API - symbol and tag seems to be swapped?
            symbol: entry.bollard.tag,
            directions: entry.directions.map(direction => ({
                lineName: direction.lineName,
                direction: direction.direction
            }))
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
        announcements: [],
        departures: pekaResponse.times
    };
}

export function convertLinesResponse(pekaResponse: PekaGetLinesResponse): string[] {
    return pekaResponse.map(line => line.name);
}

export function convertLineStopsResponse(pekaResponse: PekaGetBollardsByLineResponse): NodeLineStopsResponse {
    return pekaResponse.directions.map(entry => ({
        direction: entry.direction.direction,
        bollards: entry.bollards.map(bollard => ({
            name: bollard.name.substring(0, bollard.name.lastIndexOf("-") - 1),
            symbol: bollard.symbol,
            orderNo: bollard.orderNo
        }))
    }));
}

function convertTimestamp(fullTimestamp: string): string {
    return fullTimestamp.slice(fullTimestamp.indexOf("T") + 1, fullTimestamp.indexOf(":00"));
}