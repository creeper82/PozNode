import { useEffect, useState } from "react";
import { BollardsResponse } from "../types/responses";
import apiService from "../services/api/selectedService";
import { ResourceNotFoundError } from "../types/errors";

import AnimateHeight from "react-animate-height";
import BollardPickerPopup from "./BollardPickerPopup";
import Button from "./Button";
import FavoriteButton from "./FavoriteButton";

export class NoBollardsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NoBollardsError";
    }
}

export default function BollardPicker({ stopName, onSelection, initialBollard = null, favButton = false }: { stopName: string; onSelection: (bollardSymbol: string) => any; initialBollard?: string | null; favButton?: boolean }) {
    const [bollards, setBollards] = useState<BollardsResponse>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedBollardSymbol, setSelectedBollardSymbol] = useState(initialBollard ?? "");
    const [displayBollardPicker, setDisplayBollardPicker] = useState(false);

    useEffect(() => {
        async function updateData() {
            try {
                setLoading(true);
                const bollards = await apiService.getBollards(stopName);
                setLoading(false);

                if (bollards.length == 0) {
                    throw new NoBollardsError("Could not find other bollards that belong to this stop");
                }
                else {
                    setBollards(bollards);

                    if (!selectedBollardSymbol || !bollards.some(b => b.symbol == selectedBollardSymbol))
                        setSelectedBollardSymbol(bollards[0].symbol);
                    setError(null);
                }
            } catch (e) {
                setLoading(false);

                if (e instanceof ResourceNotFoundError) {
                    setError("No stop with this name"); return;
                }

                if (e instanceof NoBollardsError) {
                    setError(e.message); return;
                }

                setError("Could not load data"); return;
            }
        }

        updateData();
    }, [stopName]);

    useEffect(() => {
        onSelection(selectedBollardSymbol);
        setDisplayBollardPicker(false);
    }, [selectedBollardSymbol]);

    return (
        <>
            {loading && <span>Loading...</span>}
            {error && <span>{error}</span>}

            {!loading && !error &&
                <div style={{ display: "flex", gap: "4px" }}>
                    <Button onClick={() => setDisplayBollardPicker(!displayBollardPicker)}>
                        {selectedBollardSymbol} {displayBollardPicker ? "▲" : "▼"}
                    </Button>
                    {favButton && selectedBollardSymbol && <FavoriteButton favKey={selectedBollardSymbol} />}
                </div>
            }

            <AnimateHeight height={displayBollardPicker ? "auto" : 0} duration={250}>
                <BollardPickerPopup bollards={bollards} onSelection={setSelectedBollardSymbol} />
            </AnimateHeight>
        </>
    );
}