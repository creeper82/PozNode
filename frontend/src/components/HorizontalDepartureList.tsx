import style from "../styles/horizontal_departure_list.module.scss";
import CompactDeparturesCard from "./CompactDeparturesCard";
import { DeparturesResponse } from "../types/responses";

export default function HorizontalDepartureList({ departures }: { departures: DeparturesResponse[]; }) {
    return (
        <div className={style.root}>
            {departures.map(single =>
                <CompactDeparturesCard key={single.bollardSymbol} title={single.bollardName} departures={single.departures} />
            )}
        </div>
    );
}