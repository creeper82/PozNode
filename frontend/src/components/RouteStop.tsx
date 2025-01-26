import BollardOrdered from "../types/BollardOrdered";
import style from "../styles/route.module.scss";
import { Link } from "react-router";
import { getStopUrl } from "./utils/getUrl";

export default function RouteStop({ bollard }: { bollard: BollardOrdered; }) {
    return (
        <div className={style.stop}>
            <div className={style.indicator_container}>
                <div className={style.indicator}></div>
            </div>
            <div className={style.name_container}>
                <Link className="link_hoverable" to={getStopUrl(bollard.name, bollard.symbol)}>{bollard.name}</Link>
            </div>
        </div>
    );
}