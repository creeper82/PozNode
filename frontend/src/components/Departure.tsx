import { useState } from "react";
import style from "../styles/departure.module.scss";
import Vehicle from "../types/Vehicle";
import Minutes from "./Minutes";
import VehicleData from "./VehicleData";
import AnimateHeight from "react-animate-height";

export default function Departure({ line, direction, minutes, exactTime, live, vehicle = null }: { line: string, direction: string, minutes: number, exactTime: string, live: boolean; vehicle?: Vehicle | null; }) {
    const [showVehicle, setShowVehicle] = useState(false);

    function toggleShow() {
        setShowVehicle(!showVehicle);
    }

    return (
        <>
            <div className={`${style.root} ${vehicle ? style.clickable : ""}`} onClick={vehicle ? toggleShow : undefined}>
                <div className={style.line_info}>
                    <p className={style.line}>{line}</p>
                    <p className={style.direction}>{direction}</p>
                </div>
                <Minutes minutes={minutes} live={live} exactTime={exactTime} />
                <span className={style.arrow}>{vehicle && (showVehicle ? "▲" : "▼")}</span>

            </div>

            {vehicle &&
                <AnimateHeight height={showVehicle ? "auto" : 0} duration={150}>
                    <VehicleData vehicle={vehicle} />
                </AnimateHeight>
            }
        </>
    );
}