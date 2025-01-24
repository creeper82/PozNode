import SearchBar from "../../components/SearchBar";
import FavoritesSection from "./FavoritesSection";
import style from "../../styles/main_screen.module.scss";

export default function MainScreen() {
    return (
        <div className={style.root}>
            <SearchBar hint="Find a stop or line" />
            <FavoritesSection favorites={["AWF41", "AWF42", "RYWI72", "BIPRK02", "LUKRE01"]} />
        </div>
    );
}