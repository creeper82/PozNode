import Departure from "../types/Departure";
import CompactDeparture from "./CompactDeparture";
import style from "../styles/compact_departures_card.module.scss";
import Divider from "./Divider";

export default function CompactDeparturesCard({ title, departures, maxHeight: height = "300px" }: { title: string, departures: Departure[]; maxHeight?: string; }) {
    return (
        <div className={style.root}>
            <p className={style.title}>{title}</p>
            <div className={style.departures} style={{ height: height }}>
                {departures.map(departure =>
                    <div key={`${departure.line}_${departure.direction}_${departure.minutes}`}>
                        <CompactDeparture line={departure.line} direction={departure.direction} minutes={departure.minutes} exactTime={departure.departure} live={departure.realTime} />
                        <Divider />
                    </div>
                )}
            </div>

        </div>
    );
}