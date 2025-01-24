import SearchBar from "../../components/SearchBar";
import FavoritesSection from "./FavoritesSection";

export default function MainScreen() {
    return (
        <div className="content">
            <SearchBar />
            <FavoritesSection favorites={["AWF41", "AWF42", "RYWI72", "BIPRK02", "LUKRE01"]} />
        </div>
    );
}