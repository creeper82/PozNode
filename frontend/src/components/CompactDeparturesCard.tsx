import Departure from "../types/Departure";
import CompactDeparture from "./CompactDeparture";
import style from "../styles/compact_departures_card.module.scss";
import Divider from "./Divider";
import { ReactNode } from "react";
import getDepartureKey from "./utils/getDepartureKey";

export default function CompactDeparturesCard({ title, departures, maxHeight: height = "300px" }: { title: ReactNode, departures: Departure[]; maxHeight?: string; }) {
    return (
        <div className={style.root}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.departures} style={{ height: height }}>
                {departures.map(departure =>
                    <div key={getDepartureKey(departure)}>
                        <CompactDeparture line={departure.line} direction={departure.direction} minutes={departure.minutes} exactTime={departure.departure} live={departure.realTime} />
                        <Divider />
                    </div>
                )}
            </div>

        </div>
    );
}