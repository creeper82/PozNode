import style from "../styles/horizontal_departure_list.module.scss";
import LiveCompactDeparturesCard from "./LiveCompactDeparturesCard";

export default function HorizontalDepartureList({ symbols, intervalSec = 10 }: { symbols: string[]; intervalSec?: number; }) {
    return (
        <div className={style.root}>
            {symbols.map(symbol =>
                <LiveCompactDeparturesCard key={symbol} symbol={symbol} intervalSec={intervalSec} />
            )}
        </div>
    );
}