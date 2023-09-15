import { useWeather } from "../../hooks/useWeather";
import moment from "moment";
import styles from "./dailyForecast.module.less";
import { useState } from "react";
import { Hour } from "../../interfaces/weather.interface";

export const DailyForecast = () => {
  const { data, changeTime } = useWeather();
  const [selected, setSelected] = useState(0);

  const selectNewTime = (data: Hour, index: number) => {
    setSelected(index);
    changeTime(data);
  };

  return (
    <>
      {data && (
        <div className={styles.container}>
          {data.forecast.forecastday[0].hour.map((hour, index: number) => (
            <div
              onClick={() => selectNewTime(hour, index)}
              key={index}
              className={`${styles.hoursList} ${
                selected === index ? styles.selected : styles.unselected
              }`}
            >
              <p>{index === 0 ? "Now" : moment(hour.time).format("HH")}</p>
              <img src={hour.condition.icon} alt={hour.condition.text} />
              <p>{Math.round(hour.temp_c)}°C</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
