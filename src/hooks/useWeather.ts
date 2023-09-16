import { useEffect, useState } from "react";
import { addRequest, getWeather, setCity, setSelectedTime } from "../redux/slices/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Hour } from "../interfaces/weather.interface";

export const useWeather = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, city, selectedTime, requests} = useSelector(
    (state: RootState) => state.weather
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = async () => {
    setIsLoading(true);
     await dispatch(getWeather(city));
    if(!selectedTime){
      dispatch(setSelectedTime(data?.current))
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
      };

  const fetchCity = (city: string) => {
    dispatch(setCity(city));
    dispatch(addRequest())
  }

  const changeTime = (time: Hour) => {
    dispatch(setSelectedTime(time));
  }

  useEffect(() => {
    dispatch(setSelectedTime(null));
    fetchWeather();
    // eslint-disable-next-line
  }, [city]);

  return { data, city, selectedTime, requests, isLoading, fetchCity, changeTime };
};
