import Departure from "../types/Departure";
import CompactDeparture from "./CompactDeparture";
import style from "../styles/compact_departures_card.module.scss";
import Divider from "./Divider";

export default function CompactDeparturesCard({ title, departures, maxHeight = "300px" }: { title: string, departures: Departure[]; maxHeight?: string; }) {
    return (
        <div className={style.root}>
            <p className={style.title}>{title}</p>
            <div className={style.departures} style={{ maxHeight: maxHeight }}>
                {departures.map(departure =>
                    <>
                        <CompactDeparture key={`${departure.line}_${departure.direction}_${departure.minutes}`} line={departure.line} direction={departure.direction} minutes={departure.minutes} live={departure.realTime} />
                        <Divider />
                    </>
                )}
            </div>

        </div>
    );
}