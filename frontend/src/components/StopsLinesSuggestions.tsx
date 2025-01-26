import StopPoint from "../types/StopPoint";
import Suggestions from "./Suggestions";
import style from "../styles/stops_lines_suggestions.module.scss";
import { Link } from "react-router";
import { getLineUrl, getStopUrl } from "./utils/getUrl";
import Chip from "./Chip";

export default function StopsLinesSuggestions({ stops, lines, displayed = true, onSelection = () => { } }: { stops: StopPoint[]; lines: string[]; displayed?: boolean; onSelection?: () => any; }) {
    return (
        <Suggestions displayed={displayed && (lines.length > 0 || stops.length > 0)}>
            {lines.length > 0 &&
                <>
                    <p className={style.category}>Lines</p>
                    <div className={style.lines}>
                        {lines.map(line => <Chip>
                            <Link key={line} to={getLineUrl(line)} onClick={onSelection}>
                                {line}
                            </Link>
                        </Chip>
                        )}
                    </div>
                </>

            }

            {stops.length > 0 &&
                <>
                    <p className={style.category}>Stops</p>
                    <div className={style.stops}>
                        {stops.map(stop => <Chip>
                            <Link key={stop.symbol} to={getStopUrl(stop.name)} onClick={onSelection}>
                                {stop.name}
                            </Link>
                        </Chip>
                        )}
                    </div>
                </>
            }

        </Suggestions>
    );
}