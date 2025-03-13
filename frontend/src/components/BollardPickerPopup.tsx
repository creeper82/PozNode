import { BollardsResponse } from "../types/responses";

import style from "../styles/bollard_picker_popup.module.scss";
import BollardCard from "./BollardCard";

export default function BollardPickerPopup({ bollards, onSelection }: { bollards: BollardsResponse; onSelection: (symbol: string) => any; }) {
    return (
        <div className={style.root}>
            {bollards.map(bollard =>
                <BollardCard key={bollard.symbol} title={bollard.symbol} directions={bollard.directions} onClick={() => { onSelection(bollard.symbol); }} />
            )}
        </div>
    );
}