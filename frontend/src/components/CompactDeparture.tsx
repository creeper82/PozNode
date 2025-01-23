import style from "../styles/compact_departure.module.scss";

export default function CompactDeparture({ line, direction, minutes, live }: { line: string, direction: string, minutes: number, live: boolean; }) {
    return (
        <div className={style.root}>
            <div className={style.line_info}>
                <p className={style.line}>{line}</p>
                <p className={style.direction}>{direction}</p>
            </div>
            <div>
                <p className={live ? style.live_minutes : ""}>{minutes > 0 ? minutes : "<1"} min</p>
            </div>
        </div>
    );
}