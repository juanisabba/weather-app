import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { useWeather } from "../../hooks/useWeather";
import moment from "moment";
import styles from "./currentWeather.module.less";

export const CurrentWeather = () => {
  const { data, city, selectedTime } = useWeather();
  const { getFavoriteStatus, handleFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);

  console.log({selectedTime})

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
      {data && selectedTime && (
        <div className={styles.container}>
          <div className={styles.weather}>
            <h2 className={styles.temperature}>
              {Math.round(selectedTime.temp_c)}
              <span>°C</span>
            </h2>
            <div>
              <div className={styles.condition}>
                <img
                  src={selectedTime.condition.icon}
                  alt={selectedTime.condition.text}
                />
                <h4>{selectedTime.condition.text}</h4>
              </div>
              <div className={styles.extraInfo}>
                <p>Precipitation: {selectedTime.chance_of_rain}%</p>
                <p>Humidity: {selectedTime.humidity}%</p>
                <p>Wind: {selectedTime.wind_kph} km/h</p>
              </div>
            </div>
          </div>
          <div className={styles.locationInfo}>
            <div>
              <h3>
                {data.location.name}, {data.location.country}
              </h3>
              <h4>{moment(selectedTime.time).calendar()}</h4>
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
