import { useWeather } from "../../hooks/useWeather";
import moment from 'moment'
import styles from "./styles.module.less";
import { useTheme } from "../../hooks/useTheme";

export const WeeklyForecast = () => {
  const { data } = useWeather();
  const {theme} = useTheme()
  return (
    <>
      {data && (
        <div className={`${styles.weeklyForecastContainer} ${styles[theme]}`}>
          <h2 className={styles.title}>Pronóstico Semanal</h2>
          {data.forecast.forecastday.map(({ date, day }, index: number) => (
            <div key={index} className={styles.day}>
              <h3>{index === 0 ? "hoy" : moment(date).format("dddd")}</h3>
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
