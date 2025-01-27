import Departure from "../types/Departure";
import style from "../styles/departures_card.module.scss";
import Divider from "./Divider";
import DepartureComponent from "./Departure";
import Announcement from "../types/Announcement";
import ExpandableAnnouncements from "./ExpandableAnnouncements";

export default function DeparturesTable({ departures, announcements = [] }: { departures: Departure[]; announcements?: Announcement[]; }) {
    return (
        <div className={style.root}>
            {announcements.length > 0 &&
                <ExpandableAnnouncements announcements={announcements} />
            }

            <div className={style.departures}>
                {departures.map(departure =>
                    <div key={`${departure.line}_${departure.direction}_${departure.minutes}`}>
                        <DepartureComponent line={departure.line} direction={departure.direction} minutes={departure.minutes} exactTime={departure.departure} live={departure.realTime} />
                        <Divider />
                    </div>
                )}
            </div>

        </div>
    );
}