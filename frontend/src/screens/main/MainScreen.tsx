import { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import FavoritesSection from "./FavoritesSection";

export default function MainScreen() {
    useEffect(() => {
        document.title = "PozNode";
    }, []);
    
    return (
        <div className="content">
            <SearchBar />
            <FavoritesSection favorites={["AWF41", "RYWI72", "BIPRK02"]} />
        </div>
    );
}