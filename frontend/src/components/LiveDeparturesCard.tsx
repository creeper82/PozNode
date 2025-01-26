import { useEffect, useState } from "react";
import { DeparturesResponse } from "../types/responses";
import apiService from "../services/api/selectedService";
import DeparturesCard from "./DeparturesCard";
import { ResourceNotFoundError } from "../types/errors";

export default function LiveDeparturesCard({ symbol, intervalSec }: { symbol: string; intervalSec: number; }) {
    const [response, setResponse] = useState<DeparturesResponse>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function updateData() {
            try {
                const r = await apiService.getDepartures(symbol);
                setResponse(r);
                setError(null);
            } catch (e: any) {
                console.log(e);
                if (e instanceof ResourceNotFoundError) {
                    setError(`Bollard ${symbol} does not exist`); return;
                }

                setError("Could not load the departures");
            }
        }

        const interval = setInterval(updateData, intervalSec * 1000);

        updateData();

        return () => { clearInterval(interval); };
    }, [symbol, intervalSec]);

    return (
        <>
            {error && <p>{error}</p>}
            {!error && !response && <p>Loading...</p>}
            {!error && <DeparturesCard departures={response?.departures ?? []} />}
        </>

    );
}