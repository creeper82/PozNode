import { useState } from "react";
import style from "../styles/minutes.module.scss";

export default function Minutes({ minutes, live, exactTime }: { minutes: number; live: boolean; exactTime: string; }) {
    const rightNow = (minutes == 0);

    const [displayAltTime, setDisplayAltTime] = useState(false);

    const time =
        (displayAltTime || minutes >= 60)
            ? (live ? "~" : "") + exactTime
            : (rightNow ? "<1" : minutes) + " min";

    return (
        <div className={style.root + (live ? ` ${style.live}` : "") + (rightNow ? ` ${style.now}` : "")}>
            <p onMouseEnter={() => setDisplayAltTime(true)} onMouseLeave={() => setDisplayAltTime(false)}>
                {time}
            </p>
        </div>
    );
}