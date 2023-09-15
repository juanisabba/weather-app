import { useWeather } from "../../hooks/useWeather";
import moment from "moment"

export const WeeklyForecast = () => {
  const {  data } = useWeather();
  return (
    <>
      {data && (
        <div>
          {data.forecast.forecastday.map(({date, day}, index: number) =>(
            <div key={index}>
                <h3>{moment(date).format("dddd")}</h3>
                <img src={day.condition.icon} alt={day.condition.text} />
                <div>
                <p>Min: {day.mintemp_c}°C</p>
                <p>Max: {day.maxtemp_c}°C</p>
                </div>
            </div>
          )) }
        </div>
      )}
    </>
  );
};
