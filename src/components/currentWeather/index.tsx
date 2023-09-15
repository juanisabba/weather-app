import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { useWeather } from "../../hooks/useWeather";

export const CurrentWeather = () => {
  const { data, city } = useWeather();
  const { getFavoriteStatus, handleFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if(data?.location.name){
      setFavorite(getFavoriteStatus(data.location.name));
    }
    //eslint-disable-next-line
  }, [handleFavorite, city, getFavoriteStatus]);

  const handleFavoriteButton = () => {
    if(data?.location.name){
      handleFavorite(data.location.name);
    }
  }

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
      <button onClick={handleFavoriteButton}>
        {favorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </>
  );
};
