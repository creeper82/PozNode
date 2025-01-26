export function getStopUrl(stopName: string, bollard: string|null = null) {
    return `/stop/${encodeURIComponent(stopName)}` + (bollard ? `?bollard=${bollard}` : "");
}

export function getLineUrl(lineName: string) {
    return `/line/${encodeURIComponent(lineName)}`;
}