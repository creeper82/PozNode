import Announcement from "../types/Announcement";
import style from "../styles/announcement_card.module.scss";

function date(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
}

export default function AnnouncementCard({ announcement }: { announcement: Announcement; }) {
    return (
        <div className={style.root}>
            <span className={style.valid}>{date(announcement.startDate)} ~ {date(announcement.endDate)}</span>
            <p className={style.content}>{announcement.content}</p>
        </div>
    );
}