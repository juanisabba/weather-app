import { useState } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useFavorites = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: favorites } = useSelector(
    (state: RootState) => state.favorites
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = (city: string) => {
    setIsLoading(true);
    if (!city) return;
    const isFavorite = favorites.some((c: string) => c === city);
    if (!isFavorite) {
      dispatch(addFavorite(city));
    } else {
      dispatch(removeFavorite(city));
    }
    setIsLoading(false);
  };

  const getFavoriteStatus = (city: string) => {
    const isFavorite = favorites.some((c: string) => c === city);
    return isFavorite;
  };

  return { favorites, handleFavorite, getFavoriteStatus, isLoading };
};
