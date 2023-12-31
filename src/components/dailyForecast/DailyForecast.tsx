import { useState } from "react";
import { SingleHour } from "./SingleHour";
import { useWeather } from "../../hooks/useWeather";
import { useTheme } from "../../hooks/useTheme";
import { Hour } from "../../interfaces/weather.interface";
import moment from "moment";
import styles from "./styles.module.less";

export const DailyForecast = () => {
  const [selected, setSelected] = useState(0);
  const { data, changeTime } = useWeather();
  const {theme} = useTheme()

  // select a new time to display
  const selectNewTime = (data: Hour, index: number) => {
    setSelected(index);
    changeTime(data);
  };

  // the quantity of hours remaining fom today
  const hoursFromToday =
    24 - Number(moment(data?.location.localtime).format("HH"));

  return (
    <>
      {data && (
        <div className={`${styles.dailyForecastContainer} ${styles[theme]}`}>
          {/* Today's forecast */}
          {data.forecast.forecastday[0].hour
            .slice(24 - hoursFromToday, 24)
            .map((hour, index: number) => (
              <SingleHour
                hour={hour}
                index={index}
                onClick={selectNewTime}
                selected={selected}
                key={index}
              />
            ))}

          {/* tomorrow forecast */}
          {hoursFromToday &&
            data.forecast.forecastday[1].hour
              .slice(0, 24 - hoursFromToday)
              .map((hour, index: number) => (
                <SingleHour
                hour={hour}
                index={index + hoursFromToday}
                onClick={selectNewTime}
                selected={selected}
                key={index + hoursFromToday}
              />
              ))}
        </div>
      )}
    </>
  );
};
