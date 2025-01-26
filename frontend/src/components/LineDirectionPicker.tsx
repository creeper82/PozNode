import { useState } from "react";
import AnimateHeight from "react-animate-height";
import ChipList from "./ChipList";
import Chip from "./Chip";

export default function LineDirectionPicker({ directions, onSelection }: { directions: string[]; onSelection: (index: number) => any; }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [displayDirectionPicker, setDisplayDirectionPicker] = useState(false);
    const selectedName = directions[selectedIndex];

    function onDirectionClick(index: number) {
        setSelectedIndex(index);
        onSelection(index);
        setDisplayDirectionPicker(false);
    }

    return (
        <>
            <div className="button" onClick={() => { setDisplayDirectionPicker(!displayDirectionPicker); }}>
                {selectedName} {displayDirectionPicker ? "▲" : "▼"}
            </div>
            <AnimateHeight height={displayDirectionPicker ? "auto" : 0} duration={250}>
                <div style={{ padding: "16px 2px" }}>
                    <p>Directions:</p>
                    <ChipList style={{ padding: "16px", borderRadius: "8px", fontSize: "1.2em" }}>
                        {directions.map((direction, index) =>
                            <Chip key={`${index}_${direction}`} onClick={() => { onDirectionClick(index); }}>{direction}</Chip>
                        )}
                    </ChipList>
                </div>


            </AnimateHeight>

        </>

    );
}