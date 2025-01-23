import SearchBar from "../../components/SearchBar";
import FavoritesSection from "./FavoritesSection";

export default function MainScreen() {
    return (
        <>
            <SearchBar hint="Find a stop or line" />
            <FavoritesSection favorites={["AWF41", "AWF42", "RYWI72"]} />
        </>
    );
}