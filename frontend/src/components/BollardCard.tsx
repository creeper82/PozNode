import Direction from "../types/Direction";

import style from "../styles/bollard_card.module.scss";

export default function BollardCard({ title, directions, onClick }: { title: string, directions: Direction[]; onClick: () => any; }) {
    return (
        <div className={style.root} onClick={onClick}>
            <p className={style.title}>{title}</p>
            <div>
                {directions.map(direction =>
                    <DirectionRow key={direction.lineName + direction.direction} line={direction.lineName} direction={direction.direction} />
                )}
            </div>
        </div>
    );
}

function DirectionRow({ line, direction }: { line: string, direction: string; }) {
    return (
        <div className={style.row}>
            <span className={style.line}>{line}</span> <span className={style.direction}>{direction}</span>
        </div>
    );
}