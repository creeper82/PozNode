import Vehicle from "../types/Vehicle";
import style from "../styles/vehicle_data.module.scss";
import { getPhotoTransUrl } from "./utils/getUrl";

export default function VehicleData({ vehicle: v }: { vehicle: Vehicle; }) {
    const accessibilityText = (v.ramp || v.lowEntrance || v.lowFloor)
        ? [
            v.ramp && "ramp",
            v.lowEntrance && "partial low entrance",
            v.lowFloor && "fully low floor"
        ].filter(Boolean).join(", ")
        : "Unknown";

    return (
        <div className={style.root}>
            <p>Accessibility: <b>{accessibilityText || "None"}</b></p>
            <p>Vehicle ID: <b><a className="link_hoverable" href={getPhotoTransUrl(v.id)}>{v.id}</a></b></p>
            {v.chargers != undefined && <p>USB Chargers: <b>{v.chargers ? "Yes" : "No"}</b></p>}
        </div>
    );
}