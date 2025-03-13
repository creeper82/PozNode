export default function getLocalStorageFavs() {
    const favs = localStorage.getItem("favorites") || "";
    if (favs == "") return [];

    return favs.split(";");
}