import style from "../styles/compact_departure.module.scss";
import Minutes from "./Minutes";

export default function CompactDeparture({ line, direction, minutes, exactTime, live }: { line: string, direction: string, minutes: number, exactTime: string, live: boolean; }) {
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