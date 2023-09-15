import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

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

export const addFavorite = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(addFavoriteReducer(id));
    console.log("fav added");
  } catch (e) {
    console.log("error");
  }
};

export const removeFavorite = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(removeFavoriteReducer(id));
    console.log("fav removed")
  } catch (e) {
    console.log("error");
  }
};

export default favoritesSlice.reducer;
