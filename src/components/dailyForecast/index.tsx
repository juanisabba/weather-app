import { useWeather } from "../../hooks/useWeather";

export const DailyForecast = () => {
  const { dailyForecast: data } = useWeather("Madrid");
  return (
    <>
      {data && (
        <div>
          {data.forecast.forecastday[0].hour.map((hour, index: number) =>(
            <div key={index}>
                <p>{hour.time}</p>
                <img src={hour.condition.icon} alt={hour.condition.text} />
                <p>{hour.temp_c}°C</p>
            </div>
          )) }
        </div>
      )}
    </>
  );
};
