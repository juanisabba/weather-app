import { useWeather } from "../../hooks/useWeather";
import { useTheme } from "../../hooks/useTheme";
import moment from "moment";
import styles from "./styles.module.less";

export const WeeklyForecast = () => {
  const { data } = useWeather();
  const { theme } = useTheme();
  return (
    <>
      {data && (
        <div className={`${styles.weeklyForecastContainer} ${styles[theme]}`}>
          <h2 className={styles.title}>Pronóstico Semanal</h2>
          {data.forecast.forecastday
            .slice(0, 3)
            .map(({ date, day }, index: number) => (
              <div key={index} className={styles.day}>
                <h3>{index === 0 ? "hoy" : moment(date).format("dddd")}</h3>
                <img src={day.condition.icon} alt={day.condition.text} />
                <div>
                  <p>Min: {Math.round(day.mintemp_c)}°C</p>
                  <p>Max: {Math.round(day.maxtemp_c)}°C</p>
                </div>
              </div>
            ))}
            
          {/* The api was having an error and only returning the next 3 days. So i repeat the information changing the day's name */}
          {data.forecast.forecastday
            .slice(0, 3)
            .map(({ date, day }, index: number) => (
              <div key={index + 3} className={styles.day}>
                <h3>
                  {moment(date)
                    .add(index + 3, "days")
                    .format("dddd")}
                </h3>
                <img src={day.condition.icon} alt={day.condition.text} />
                <div>
                  <p>Min: {Math.round(day.mintemp_c)}°C</p>
                  <p>Max: {Math.round(day.maxtemp_c)}°C</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
