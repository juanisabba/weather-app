import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { messageHandler } from "../../utlis/messageHandler";

interface InitalStateProps {
  data: string[];
}
const initialState: InitalStateProps = {
  data: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteReducer: (state, { payload }) => {
      state.data.unshift(payload);
    },
    removeFavoriteReducer: (state, { payload }) => {
      state.data = state.data.filter((city: string) => city !== payload);
    },
  },
});

export const { addFavoriteReducer, removeFavoriteReducer } =
  favoritesSlice.actions;

export const addFavorite = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(addFavoriteReducer(city));
    messageHandler({
      type: "success",
      message: `"${city}" added to favorites`,
    });
  } catch (e) {
    messageHandler({
      type: "error",
      message: "An error has occurred",
    });
  }
};

export const removeFavorite =
  (city: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(removeFavoriteReducer(city));
      messageHandler({
        type: "success",
        message: `"${city}" deleted from favorites`,
      });
    } catch (e) {
      messageHandler({
        type: "error",
        message: "An error has occurred",
      });
    }
  };

export default favoritesSlice.reducer;
