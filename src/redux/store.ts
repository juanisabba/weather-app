import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import weatherReducer from './slices/weatherSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    favorites: favoritesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;