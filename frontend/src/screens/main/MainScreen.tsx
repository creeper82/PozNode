import { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import FavoritesSection from "./FavoritesSection";
import getLocalStorageFavs from "../../components/utils/getLocalStorageFavs";

export default function MainScreen() {

    const favorites = getLocalStorageFavs();

    useEffect(() => {
        document.title = "PozNode";
    }, []);

    return (
        <div className="content">
            <SearchBar />
            {favorites.length > 0 && <FavoritesSection favorites={favorites} />}
        </div>
    );
}