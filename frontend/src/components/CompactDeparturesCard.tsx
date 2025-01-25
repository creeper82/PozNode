import Departure from "../types/Departure";
import CompactDeparture from "./CompactDeparture";
import style from "../styles/compact_departures_card.module.scss";
import Divider from "./Divider";
import { ReactNode } from "react";

export default function CompactDeparturesCard({ title, departures, maxHeight: height = "300px" }: { title: ReactNode, departures: Departure[]; maxHeight?: string; }) {
    return (
        <div className={style.root}>
            <div className={style.title}>
                {title}
            </div>
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