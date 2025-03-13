import { useEffect, useState } from "react";
import CompactDeparturesCard from "./CompactDeparturesCard";
import { DeparturesResponse } from "../types/responses";
import apiService from "../services/api/selectedService";
import { Link } from "react-router";
import { getStopUrl } from "./utils/getUrl";
import { ResourceNotFoundError } from "../types/errors";

export default function LiveCompactDeparturesCard({ symbol, intervalSec }: { symbol: string; intervalSec: number; }) {
    const [response, setResponse] = useState<DeparturesResponse>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function updateData() {
            try {
                const r = await apiService.getDepartures(symbol);
                setResponse(r);
                setError(null);
            } catch (e: any) {
                if (e instanceof ResourceNotFoundError) {
                    setError("Stop not found");
                    clearInterval(interval);
                    return;
                }
                setError("Error");
            }
        }

        const interval = setInterval(updateData, intervalSec * 1000);

        updateData();

        return () => { clearInterval(interval); };
    }, [symbol, intervalSec]);

    return (
        <>
            {error && <CompactDeparturesCard departures={[]} title={error} />}
            {!error && <CompactDeparturesCard departures={response?.departures ?? []} title={response ? <Link className="link_reset link_hoverable" to={getStopUrl(response.bollardName, response.bollardSymbol)}>{response.bollardName}</Link> : "Loading"} />}
        </>

    );
}