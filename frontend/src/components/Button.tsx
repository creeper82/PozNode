import { ReactNode } from "react";

export default function Button({ children, onClick }: { children: ReactNode, onClick: () => any; }) {
    return (
        <div className="button" onClick={onClick}>
            {children}
        </div>
    );
}