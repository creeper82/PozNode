import { Link } from "react-router";
import style from "../styles/header.module.scss";

export default function Header() {

    return (
        <header className={style.root}>
            <Link to="">
                <h1>PozNode</h1>
            </Link>
        </header>
    );
}