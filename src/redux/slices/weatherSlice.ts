import { AppDispatch } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeather, IWeatherResponse } from "../../interfaces/weather.interface";

export interface InitalStateProps {
  data: IWeather | null
}
const initialState: InitalStateProps = {
    data: null,
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export const getWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    const response: IWeatherResponse = await axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/forecast.json?key=bea0b1ebed9b4426a2333128230908&q=${city}&days=7&aqi=no&alerts=no`,
    });
    dispatch(setWeather(response.data));
  } catch (e) {
    console.log("error");
  }
};

export default weatherSlice.reducer;
