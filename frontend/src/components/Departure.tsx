import style from "../styles/departure.module.scss";
import Vehicle from "../types/Vehicle";
import Minutes from "./Minutes";

export default function Departure({ line, direction, minutes, exactTime, live, vehicle = null }: { line: string, direction: string, minutes: number, exactTime: string, live: boolean; vehicle?: Vehicle | null; }) {
    return (
        <div className={style.root}>
            <div className={style.line_info}>
                <p className={style.line}>{line}</p>
                <p className={style.direction}>{direction}</p>
            </div>
            <Minutes minutes={minutes} live={live} exactTime={exactTime} />
        </div>
    );
}