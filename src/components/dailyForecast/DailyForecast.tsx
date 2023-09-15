import { useWeather } from "../../hooks/useWeather";
import moment from "moment";
import styles from "./dailyForecast.module.less";
import { useState } from "react";
import { Hour } from "../../interfaces/weather.interface";
import { SingleHour } from "./SingleHour";

export const DailyForecast = () => {
  const { data, changeTime } = useWeather();
  const [selected, setSelected] = useState(0);

  const selectNewTime = (data: Hour, index: number) => {
    setSelected(index);
    changeTime(data);
  };

  // the quantity of hours remaining fom today
  const hoursFromToday =
    24 - Number(moment(data?.location.localtime).format("HH"));
  console.log(hoursFromToday);

  return (
    <>
      {data && (
        <div className={styles.container}>
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
