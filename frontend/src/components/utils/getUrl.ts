export function getStopUrl(stopName: string, bollard: string | null = null) {
    return `/stop/${encodeURIComponent(stopName)}` + (bollard ? `?bollard=${bollard}` : "");
}

export function getLineUrl(lineName: string) {
    return `/line/${encodeURIComponent(lineName)}`;
}

export function getPhotoTransUrl(vehicle: string) {
    const vehicleNo = Number(vehicle);

    if (!Number.isNaN(vehicleNo) && vehicleNo < 2000) {
        return `https://phototrans.pl/autobusy.php?s=5015&marka_id=&VIN=&pelna_nazwa=&rocznik=&kasacja=&running=yes&rejestracja=&numer=${vehicle}&ybuy=&ysell=&operator=109&operator_nazwa%5B1%5D=miejskie+przedsi%C4%99biorstwo+komunikacyjne+w+poznaniu&testy=--&operator_nazwa%5B2%5D=&r=Wy%C5%9Blij`;
    } else {
        return `https://www.google.com/search?q=phototrans%20Poznan%20Wielkopolskie%20%22${encodeURIComponent(vehicle)}%22`;
    }
}