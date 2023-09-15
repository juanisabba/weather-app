import { useWeather } from "../../hooks/useWeather";

export const CurrentWeather = () => {
  const { data } = useWeather();
  return (
    <>
      {data && (
        <div>
          <div>
            <h2>{data.current.temp_c}°C</h2>
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
          </div>
          <h4>
            {data.location.name}, {data.location.country}
          </h4>
        </div>
      )}
    </>
  );
};
