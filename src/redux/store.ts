import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;