import { useEffect, useState } from "react";
import { BollardsResponse } from "../types/responses";
import apiService from "../services/api/selectedService";
import { ResourceNotFoundError } from "../types/errors";

import style from "../styles/bollard_picker.module.scss";

export default function BollardPicker({ stopName, onSelection, initialBollard = null }: { stopName: string; onSelection: (bollardSymbol: string) => any; initialBollard?: string | null; }) {
    const [bollards, setBollards] = useState<BollardsResponse>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedBollardSymbol, setSelectedBollardSymbol] = useState("");
    const [displayBollardPicker, setDisplayBollardPicker] = useState(false);

    useEffect(() => {
        async function updateData() {
            try {
                const bollards = await apiService.getBollards(stopName);
                setLoading(false);

                if (bollards.length === 0) {
                    setError("Stop has no bollards");
                }
                else {
                    setBollards(bollards);
                    setSelectedBollardSymbol(initialBollard ?? bollards[0].symbol);
                }
            } catch (e) {
                setLoading(false);

                if (e instanceof ResourceNotFoundError) {
                    setError("No stop with this name"); return;
                }

                setError("Could not load data"); return;
            }
        }

        updateData();
    }, [stopName]);

    useEffect(() => {
        onSelection(selectedBollardSymbol);
    }, [selectedBollardSymbol])

    return (
        <>
            {loading && <span>Loading...</span>}
            {error && <span>Error: {error}</span>}

            {!loading && !error && <div className={style.root}>
                {selectedBollardSymbol} {displayBollardPicker ? "▲" : "▼"}
            </div>}

        </>
    );
}