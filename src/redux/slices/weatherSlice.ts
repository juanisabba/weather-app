import { AppDispatch } from "../store";
import {
  Hour,
  IWeather,
  IWeatherResponse,
} from "../../interfaces/weather.interface";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface InitalStateProps {
  data: IWeather | null;
  city: string;
  selectedTime: Hour | null;
  requests: number;
}
const initialState: InitalStateProps = {
  data: null,
  city: "Madrid",
  selectedTime: null,
  requests: 1,
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
    addRequest: (state) => {
      state.requests += 1;
    },
  },
});

export const { setWeather, setCity, setSelectedTime, addRequest } =
  weatherSlice.actions;

export const getWeather =
  (city: string, setNotFound: (value: boolean) => void) => async (dispatch: AppDispatch) => {
    const url = `${import.meta.env.VITE_API_URL}/v1/forecast.json?key=${
      import.meta.env.VITE_API_KEY
    }&q=${city}&days=7&aqi=no&alerts=no`;
    try {
      const response: IWeatherResponse = await axios({
        method: "GET",
        url,
      });
      dispatch(setWeather(response.data));
    } catch (e) {
      setNotFound(true);
    }
    //   messageHandler({
    //     type: "error",
    //     message: "Ciudad no encontrada",
    //   });
    //   return;
    // }
  };

export default weatherSlice.reducer;
