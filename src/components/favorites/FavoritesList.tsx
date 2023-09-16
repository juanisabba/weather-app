import { useFavorites } from "../../hooks/useFavorites";
import styles from "./styles.module.less";

interface Props {
  visible: boolean;
  closeMenu: () => void;
}

export const FavoritesList = ({visible, closeMenu}: Props) => {
  const { favorites, handleFavorite } = useFavorites();
  return (
    <div className={`${styles.container} ${visible && styles.favoriteVisible}`}>
      <button className={styles.close} onClick={closeMenu}>x</button>
      <h2 className={styles.title}>Mis ciudades favoritas</h2>
      {favorites.length === 0 ? (
        <div className={styles.noFavorites}>
          <h3>No tienes ninguna ciudad en favoritos</h3>
        </div>
      ) : (
        favorites.map((city, index: number) => (
          <div className={styles.cityContainer} key={index}>
            <p className={styles.city}>{city}</p>
            <button onClick={() => handleFavorite(city)}>x</button>
          </div>
        ))
      )}
    </div>
  );
};
