import { useParams } from "react-router";
import SearchBar from "../../components/SearchBar";
import LineDirectionPicker from "../../components/LineDirectionPicker";
import { useEffect, useState } from "react";
import { LineStopsResponse } from "../../types/responses";
import { ResourceNotFoundError } from "../../types/errors";
import apiService from "../../services/api/selectedService";
import Route from "../../components/Route";
import Divider from "../../components/Divider";

export default function LineScreen() {
    const { line } = useParams();
    const [routes, setRoutes] = useState<LineStopsResponse>([]);
    const [selectedId, setSelectedId] = useState(0);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const currentRoute = (selectedId >= 0 && selectedId < routes.length && routes.length > 0) ? routes[selectedId].bollards : null;

    useEffect(() => {
        async function updateData() {
            if (line) {
                try {
                    const routes = await apiService.getLine(line);

                    if (routes.length === 0) {
                        setError("Line has no stops");

                    } else {
                        setRoutes(routes);
                    }

                    setLoading(false);
                }
                catch (e: any) {
                    setLoading(false);

                    if (e instanceof ResourceNotFoundError) {
                        setError("Line doesn't exist"); return;
                    }
                    setError("Could not load the line");
                }
            }
        }

        updateData();
    }, [line]);

    return (
        <div className="content">
            <SearchBar />
            {line && <div style={{ padding: "16px" }}>
                <h1>Line: {line}</h1>

                {loading && <p>Loading...</p>}
                {!loading && <>
                    {!error &&
                        <>
                            <LineDirectionPicker directions={routes.map(r => r.direction)} onSelection={setSelectedId} />
                            <Divider verticalMargin="16px" />
                            {currentRoute && <Route stops={currentRoute} />}
                        </>}
                    {error && <p>{error}</p>}
                </>}

            </div>}

        </div>
    );
}