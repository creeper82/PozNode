import StopPoint from "../types/StopPoint";
import Suggestions from "./Suggestions";
import style from "../styles/stops_lines_suggestions.module.scss";
import { Link } from "react-router";
import { getLineUrl, getStopUrl } from "./utils/getUrl";
import Chip from "./Chip";
import ChipList from "./ChipList";

export default function StopsLinesSuggestions({ stops, lines, displayed = true, onSelection = () => { } }: { stops: StopPoint[]; lines: string[]; displayed?: boolean; onSelection?: () => any; }) {
    return (
        <Suggestions displayed={displayed && (lines.length > 0 || stops.length > 0)}>
            {lines.length > 0 &&
                <>
                    <p className={style.category}>Lines</p>
                    <ChipList>
                        {lines.map(line => <Chip key={line}>
                            <Link to={getLineUrl(line)} onClick={onSelection}>
                                {line}
                            </Link>
                        </Chip>
                        )}
                    </ChipList>
                </>

            }

            {stops.length > 0 &&
                <>
                    <p className={style.category}>Stops</p>
                    <ChipList>
                        {stops.map(stop => <Chip key={stop.symbol}>
                            <Link to={getStopUrl(stop.name)} onClick={onSelection}>
                                {stop.name}
                            </Link>
                        </Chip>
                        )}
                    </ChipList>
                </>
            }

        </Suggestions>
    );
}