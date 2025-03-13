import { ReactNode } from "react";
import style from "../styles/suggestions.module.scss";

export default function Suggestions({ children, displayed = true, padding = "8px" }: { children: ReactNode; displayed?: boolean; padding?: string; }) {
    return (
        <div className={style.root} style={{ display: displayed ? "initial" : "none", padding: padding }} onMouseDown={e => { e.preventDefault(); }} >
            {children}
        </div>
    );
}