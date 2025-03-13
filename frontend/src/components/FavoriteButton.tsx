import { useEffect, useState } from "react";
import Button from "./Button";
import getLocalStorageFavs from "./utils/getLocalStorageFavs";

export default function FavoriteButton({ favKey }: { favKey: string; }) {

    function setLocalStorageFav(fav: boolean) {
        let favorites = getLocalStorageFavs();

        if (fav && !favorites.includes(favKey)) favorites.push(favKey);
        else if (!fav) favorites = favorites.filter(f => f != favKey);

        localStorage.setItem("favorites", favorites.join(";"));
    }

    const [isFav, setIsFav] = useState<boolean | null>();

    useEffect(() => {
        if (isFav != null) setLocalStorageFav(isFav);
    }, [isFav]);

    useEffect(() => {
        setIsFav(getLocalStorageFavs().includes(favKey));
    }, [favKey]);

    return (
        <Button onClick={() => setIsFav(!isFav)}>{isFav ? "★ Favorited" : "☆ Favorite"}</Button>
    );
}