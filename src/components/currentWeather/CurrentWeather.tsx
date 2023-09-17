import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { useWeather } from "../../hooks/useWeather";
import { useTheme } from "../../hooks/useTheme";
import { capitalizeString } from "../../utlis/capitalizeString";
import moment from "moment";
import styles from "./styles.module.less";

export const CurrentWeather = () => {
  const [favorite, setFavorite] = useState(false);
  const { data, city, selectedTime } = useWeather();
  const { getFavoriteStatus, handleFavorite } = useFavorites();
  const { theme } = useTheme();

  // Check if the city is in favorites
  useEffect(() => {
    if (data?.location.name) {
      setFavorite(getFavoriteStatus(data.location.name));
    }
    //eslint-disable-next-line
  }, [handleFavorite, city]);

  const handleFavoriteButton = () => {
    if (data?.location.name) {
      handleFavorite(data.location.name);
    }
  };

  return (
    <>
      {data && selectedTime && (
        <div className={`${styles.currentWeatherContainer} ${styles[theme]}`}>
          <div className={styles.weather}>
            <h2 className={styles.temperature}>
              {Math.round(selectedTime.temp_c)}
              <span>°C</span>
            </h2>
            <div className={styles.conditionContainer}>
              <div className={styles.condition}>
                <img
                  src={selectedTime.condition.icon}
                  alt={selectedTime.condition.text}
                />
                <h4>{selectedTime.condition.text}</h4>
              </div>
              <div className={styles.extraInfo}>
                <p>Precipitaciones: {selectedTime.precip_mm} mm</p>
                <p>Humedad: {selectedTime.humidity}%</p>
                <p>Viento: {selectedTime.wind_kph} km/h</p>
              </div>
            </div>
          </div>
          <div className={styles.locationInfo}>
            <div>
              <h3>
                {data.location.name}, {data.location.country}
              </h3>
              <h4>
                {selectedTime.time
                  ? capitalizeString(moment(selectedTime.time).calendar())
                  : capitalizeString(
                      moment(data.location.localtime).calendar()
                    )}
              </h4>
            </div>
            <button
              onClick={handleFavoriteButton}
              className={styles.favoriteButton}
            >
              {favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
