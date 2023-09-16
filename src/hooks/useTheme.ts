import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const {mode: theme}  = useSelector((state: RootState) => state.theme);
  
  const toggle = () => {
    dispatch(toggleTheme());
  };
  
  return { theme, toggle };
};
