import { AppDispatch } from "../store";
import { ICurrentWeather, ICurrentWeatherResponse, } from "../../interfaces/weather/current-weather.interface";
import { IDailyForecast, IDailyForecastResponse } from "../../interfaces/weather/daily-forecast.interface";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface InitalStateProps {
  currentWeather: ICurrentWeather | null;
  dailyForecast: IDailyForecast | null;
  weeklyForecast: string | null;
}
const initialState: InitalStateProps = {
    currentWeather: null,
    dailyForecast: null,
    weeklyForecast: null,
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentWeather: (state, { payload }) => {
      state.currentWeather = payload;
    },
    setDailyForecast: (state, { payload }) => {
      state.dailyForecast = payload;
    },
    setWeeklyForecast: (state, { payload }) => {
      state.weeklyForecast = payload;
    },
  },
});

export const { setCurrentWeather, setDailyForecast, setWeeklyForecast } = weatherSlice.actions;

export const getCurrentWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    const response: ICurrentWeatherResponse = await axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/current.json?key=bea0b1ebed9b4426a2333128230908&q=${city}&aqi=no`,
    });
    dispatch(setCurrentWeather(response.data));
  } catch (e) {
    console.log("error");
  }
};

export const getDailyForecast  = (city: string) => async (dispatch: AppDispatch) => {
  try {
    const response: IDailyForecastResponse = await axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/forecast.json?key=bea0b1ebed9b4426a2333128230908&q=${city}&days=1&aqi=no&alerts=no`,
    });
    dispatch(setDailyForecast(response.data));
  } catch (e) {
    console.log("error");
  }
};

// export const getProductById  = (id: string) => async (dispatch: AppDispatch) => {
//   try {
//     const response: IProductResp = await axios({
//       method: "GET",
//       url: `http://localhost:3001/api/products/find/${id}`,
//     });
//     dispatch(setSingleProduct(response.data));
//   } catch (e) {
//     window.location.replace("http://localhost:3000/");
//   }
// };

export default weatherSlice.reducer;
