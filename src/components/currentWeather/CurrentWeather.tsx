import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { useWeather } from "../../hooks/useWeather";
import moment from "moment";
import styles from "./currentWeather.module.less";

export const CurrentWeather = () => {
  const { data, city } = useWeather();
  const { getFavoriteStatus, handleFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (data?.location.name) {
      setFavorite(getFavoriteStatus(data.location.name));
    }
    //eslint-disable-next-line
  }, [handleFavorite, city, getFavoriteStatus]);

  const handleFavoriteButton = () => {
    if (data?.location.name) {
      handleFavorite(data.location.name);
    }
  };

  return (
    <>
      {data && (
        <div className={styles.container}>
          <div className={styles.weather}>
            <h2 className={styles.temperature}>
              {Math.round(data.current.temp_c)}
              <span>°C</span>
            </h2>
            <div>
              <div className={styles.condition}>
                <img
                  src={data.current.condition.icon}
                  alt={data.current.condition.text}
                />
                <h4>{data.current.condition.text}</h4>
              </div>
              <div className={styles.extraInfo}>
                <p>Precipitation: {data.current.precip_in}%</p>
                <p>Humidity: {data.current.humidity}%</p>
                <p>Wind: {data.current.wind_kph} km/h</p>
              </div>
            </div>
          </div>
          <div className={styles.locationInfo}>
            <div>
              <h3>
                {data.location.name}, {data.location.country}
              </h3>
              <h4>{moment(data.location.localtime).calendar()}</h4>
            </div>
            <button onClick={handleFavoriteButton} className={styles.favoriteButton}>
              {favorite ? "Remove from favorites" : "Add to favorites"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
