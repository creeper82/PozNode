import { ReactNode } from "react";
import style from "../styles/chip_list.module.scss";

export default function ChipList({ children }: { children: ReactNode; }) {
    return (
        <div className={style.root}>{children}</div>
    );
}