import { Link } from "react-router";
import style from "../styles/header.module.scss";
import { DarkModeToggle, Mode } from "@anatoliygatt/dark-mode-toggle";

export default function Header({ isDarkMode, onDarkModeChanged }: { isDarkMode: boolean; onDarkModeChanged: (mode: Mode) => void; }) {

    return (
        <header className={style.root}>
            <Link to="">
                <h1>PozNode</h1>
            </Link>
            <DarkModeToggle
                mode={isDarkMode ? "dark" : "light"}
                onChange={onDarkModeChanged}
            />
        </header>
    );
}