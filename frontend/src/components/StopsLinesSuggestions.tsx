import StopPoint from "../types/StopPoint";
import Suggestions from "./Suggestions";
import style from "../styles/stops_lines_suggestions.module.scss";
import { Link } from "react-router";

export default function StopsLinesSuggestions({ stops, lines, displayed = true }: { stops: StopPoint[]; lines: string[]; displayed?: boolean; }) {
    return (
        <Suggestions displayed={displayed && (lines.length > 0 || stops.length > 0)}>
            {lines.length > 0 &&
                <>
                    <p className={style.category}>Lines</p><div className={style.lines}>
                        {lines.map(line => <Link className={style.line} key={line} to={"/line/" + line}>
                            {line}
                        </Link>
                        )}
                    </div>
                </>

            }

            {stops.length > 0 &&
                <>
                    <p className={style.category}>Stops</p><div className={style.stops}>
                        {stops.map(stop => <Link className={style.stop} key={stop.symbol} to={"/stop/" + stop.name}>
                            {stop.name}
                        </Link>
                        )}
                    </div>
                </>
            }

        </Suggestions>
    );
}