import { useWeather } from "../../hooks/useWeather";
import moment from 'moment'

export const DailyForecast = () => {
  const {  data } = useWeather();
  return (
    <>
      {data && (
        <div>
          {data.forecast.forecastday[0].hour.map((hour, index: number) =>(
            <div key={index}>
                <p>{moment(hour.time).format('LT')}</p>
                <img src={hour.condition.icon} alt={hour.condition.text} />
                <p>{hour.temp_c}°C</p>
            </div>
          )) }
        </div>
      )}
    </>
  );
};
