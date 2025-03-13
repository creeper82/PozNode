import { ReactNode } from "react";

export default function Chip({ children, onClick = () => { } }: { children: ReactNode, onClick?: () => any; }) {
    return (
        <div className="chip" onClick={onClick}>
            {children}
        </div>
    );
}