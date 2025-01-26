import { ReactNode } from "react";
import style from "../styles/chip_list.module.scss";

export interface ChipListProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function ChipList(props: ChipListProps) {
    const { children, ...rest } = props;

    return (
        <div className={style.root} {...rest}>{children}</div>
    );
}