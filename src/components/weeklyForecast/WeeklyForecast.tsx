import { useWeather } from "../../hooks/useWeather";
import moment from "moment";
import styles from "./weeklyForecast.module.less";

export const WeeklyForecast = () => {
  const { data } = useWeather();
  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.daysList}>
          {data.forecast.forecastday.map(({ date, day }, index: number) => (
            <div key={index} className={styles.day}>
              <h3>{moment(date).format("dddd")}</h3>
              <img src={day.condition.icon} alt={day.condition.text} />
              <div>
                <p>Min: {Math.round(day.mintemp_c)}°C</p>
                <p>Max: {Math.round(day.maxtemp_c)}°C</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
