import { useEffect, useState } from "react";
import { DeparturesResponse } from "../types/responses";
import apiService from "../services/api/selectedService";
import DeparturesCard from "./DeparturesCard";

export default function LiveDeparturesCard({ symbol, intervalSec }: { symbol: string; intervalSec: number; }) {
    const [response, setResponse] = useState<DeparturesResponse>();
    const [error, setError] = useState(false);

    useEffect(() => {
        async function updateData() {
            try {
                const r = await apiService.getDepartures(symbol);
                setResponse(r);
                setError(false);
            } catch {
                setError(true);
            }
        }

        const interval = setInterval(updateData, intervalSec * 1000);

        updateData();

        return () => { clearInterval(interval); };
    }, [symbol, intervalSec]);

    return (
        <>
            {error && <p>Error</p>}
            {!error && !response && <p>Loading...</p>}
            {!error && <DeparturesCard departures={response?.departures ?? []} />}
        </>

    );
}