import style from "../styles/route.module.scss";
import RouteStop from "./RouteStop";
import BollardOrdered from "../types/BollardOrdered";

export default function Route({ stops }: { stops: BollardOrdered[]; }) {
    return (
        <div className={style.root}>
            {stops.map(stop =>
                <RouteStop key={stop.symbol} bollard={stop} />
            )}
        </div>
    );
}