import { useFavorites } from "../../hooks/useFavorites";

export const FavoritesList = () => {
  const { favorites, handleFavorite } = useFavorites();
  return (
    <div>
      <h2>Favoritos</h2>
      {favorites.map((city, index: number) => (
        <div key={index}>
          <p>{city}</p>
          <p onClick={() => handleFavorite(city)}>X</p>
        </div>
      ))}
    </div>
  );
};
