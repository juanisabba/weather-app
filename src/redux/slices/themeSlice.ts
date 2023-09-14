import { createSlice } from '@reduxjs/toolkit';
import { IThemeState } from '../../interfaces/theme.interface';

const initialState: IThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: IThemeState }) => state.theme.mode;
export default themeSlice.reducer;
