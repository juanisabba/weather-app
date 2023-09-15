import { useEffect, useState } from "react";
import { getWeather } from "../redux/slices/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export const useWeather = (city: string) => {
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector(
    (state: RootState) => state.weather
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = () => {
    setIsLoading(true);
    dispatch(getWeather(city));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, []);

  return { data, isLoading, fetchWeather };
};
