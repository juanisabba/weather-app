import { useEffect, useState } from "react";
import { getWeather, setCity } from "../redux/slices/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export const useWeather = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, city} = useSelector(
    (state: RootState) => state.weather
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = () => {
    setIsLoading(true);
    dispatch(getWeather(city));
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
      };

  const fetchCity = (city: string) => {
    dispatch(setCity(city));
  }

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, [city]);

  return { data, city, isLoading, fetchCity };
};
