import { useState } from "react";
import Announcement from "../types/Announcement";
import style from "../styles/expandable_announcements.module.scss";
import AnimateHeight from "react-animate-height";
import Announcements from "./Announcements";

export default function ExpandableAnnouncements({ announcements }: { announcements: Announcement[]; }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const count = announcements.length;

    return (
        <>
            <div className={style.topbar + (isExpanded ? ` ${style.expanded}` : "")} onClick={() => { setIsExpanded(!isExpanded); }}>
                <span>Announcements ({count})</span>
                <span>{isExpanded ? "▲" : "▼"}</span>
            </div>
            <AnimateHeight height={isExpanded ? "auto" : 0} duration={250}>
                <div className={style.announcements}>
                    <Announcements announcements={announcements} />
                </div>
            </AnimateHeight>
        </>
    );
}