import { AppDispatch } from "../store";
import { Hour, IWeather, IWeatherResponse } from "../../interfaces/weather.interface";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { messageHandler } from "../../utlis/messageHandler";

interface InitalStateProps {
  data: IWeather | null;
  city: string;
  selectedTime: Hour | null;
}
const initialState: InitalStateProps = {
  data: null,
  city: "Madrid",
  selectedTime: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, { payload }) => {
      state.data = payload;
    },
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setSelectedTime: (state, { payload }) => {
      state.selectedTime = payload;
    },
  },
});

export const { setWeather, setCity, setSelectedTime } = weatherSlice.actions;

export const getWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    const response: IWeatherResponse = await axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/forecast.json?key=bea0b1ebed9b4426a2333128230908&q=${city}&days=7&aqi=no&alerts=no`,
    });
    dispatch(setWeather(response.data));
  } catch (e) {
    messageHandler({
      type: "error",
      message: "An error has occurred",
    });
  }
};

export default weatherSlice.reducer;
