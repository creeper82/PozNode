import style from "../styles/minutes.module.scss";

export default function Minutes({ minutes, live }: { minutes: number; live: boolean; }) {
    const rightNow = (minutes == 0);

    return (
        <div className={style.root + (live ? ` ${style.live}` : "") + (rightNow ? ` ${style.now}` : "")}>
            <p>
                {rightNow ? "<1" : minutes} min
            </p>
        </div>
    );
}