import { useWeather } from "../../hooks/useWeather";
import moment from "moment";
import styles from "./dailyForecast.module.less";

export const DailyForecast = () => {
  const { data } = useWeather();
  return (
    <>
      {data && (
        <div className={styles.container}>
          {data.forecast.forecastday[0].hour.map((hour, index: number) => (
            <div key={index} className={styles.hoursList}>
              <p>{moment(hour.time).format("HH")}</p>
              <img src={hour.condition.icon} alt={hour.condition.text} />
              <p>{Math.round(hour.temp_c)}°C</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
