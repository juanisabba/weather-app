import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  getCurrentWeather,
  getDailyForecast,
} from "../redux/slices/weatherSlice";

export const useWeather = (city: string) => {
  const dispatch: AppDispatch = useDispatch();
  const { currentWeather, dailyForecast } = useSelector(
    (state: RootState) => state.weather
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = () => {
    setIsLoading(true);
    dispatch(getCurrentWeather(city));
    dispatch(getDailyForecast(city));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, []);

  return { currentWeather, dailyForecast, isLoading, fetchWeather };
};
