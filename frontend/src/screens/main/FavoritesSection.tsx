import { useEffect, useState } from "react";
import HorizontalDepartureList from "../../components/HorizontalDepartureList";
import apiService from "../../services/api/PozNodeApiService";
import { DeparturesResponse } from "../../types/responses";

export default function FavoritesSection({ favorites }: { favorites: string[]; }) {
    const [departures, setDepartures] = useState<DeparturesResponse[]>([]);

    useEffect(() => {
        const promises: Promise<DeparturesResponse>[] = [];

        favorites.forEach(bollardSymbol => {
            promises.push(apiService.getDepartures(bollardSymbol));
        });
        
        (async () => {
            const results = await Promise.all(promises);

            setDepartures(results);
        })();

    }, []);

    return (
        <>
            <h1>Favorites</h1>
            <HorizontalDepartureList departures={departures} />
        </>
    );
}