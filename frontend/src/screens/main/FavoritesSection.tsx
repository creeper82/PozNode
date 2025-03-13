import HorizontalDepartureList from "../../components/HorizontalDepartureList";

export default function FavoritesSection({ favorites }: { favorites: string[]; }) {
    return (
        <>
            <h1 style={{ margin: "16px" }}>Favorites</h1>
            <HorizontalDepartureList symbols={favorites} />
        </>
    );
}