import HorizontalDepartureList from "../../components/HorizontalDepartureList";

export default function FavoritesSection({ favorites }: { favorites: string[]; }) {
    return (
        <>
            <h1>Favorites</h1>
            <HorizontalDepartureList symbols={favorites} />
        </>
    );
}