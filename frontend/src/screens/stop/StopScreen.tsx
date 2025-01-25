import { useParams, useSearchParams } from "react-router";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import BollardPicker from "../../components/BollardPicker";
import LiveDeparturesCard from "../../components/LiveDeparturesCard";
import Divider from "../../components/Divider";

export default function StopScreen() {
    const { name: stopName } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedBollardSymbol, setSelectedBollardSymbol] = useState<string | null>(searchParams.get("bollard") || null);

    useEffect(() => {
        setSearchParams((params) => {
            if (selectedBollardSymbol) {
                params.set("bollard", selectedBollardSymbol);
            } else {
                params.delete("bollard");
            }

            return params;
        });
    }, [selectedBollardSymbol]);

    return (
        <div className="content">
            <SearchBar />

            {stopName && <div style={{padding: "16px"}}>
                <h1>{stopName}</h1>
                <BollardPicker stopName={stopName} onSelection={setSelectedBollardSymbol} initialBollard={selectedBollardSymbol} />
                <Divider verticalMargin="16px" />
                {selectedBollardSymbol && <LiveDeparturesCard symbol={selectedBollardSymbol} intervalSec={10} />}
            </div>}

        </div>
    );
}