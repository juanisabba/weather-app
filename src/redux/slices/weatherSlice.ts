import { AppDispatch } from "../store";
import { ICurrentWeatherResponse, IWeather } from "../../interfaces/weather.interface";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: IWeather = {
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

// export const getProductsByCategory = (category: string) => async (dispatch: AppDispatch) => {
//   try {
//     const response: ICompleteProductsResp = await axios({
//       method: "GET",
//       url: `http://localhost:3001/api/products?category=${category}`,
//     });
//     dispatch(setProducts(response.data));
//   } catch (e) {
//     console.log("error");
//   }
// };

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
