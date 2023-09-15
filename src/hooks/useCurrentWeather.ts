import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getCurrentWeather } from "../redux/slices/weatherSlice";

export const useCurrentWeather = (city: string) => {
  const dispatch: AppDispatch = useDispatch();
  const { currentWeather: data } = useSelector(
    (state: RootState) => state.weather
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentWether = () => {
    setIsLoading(true);
    dispatch(getCurrentWeather(city));
      setIsLoading(false);
  };


  useEffect(() => {
      fetchCurrentWether();
    // eslint-disable-next-line
  }, []);

  return { data, isLoading, fetchCurrentWether };
};
