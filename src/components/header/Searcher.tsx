import { useState, FormEvent } from "react";
import { useWeather } from "../../hooks/useWeather";
import { SearchIcon } from "../../assets/icons";
import styles from "./styles.module.less";
import { useTheme } from "../../hooks/useTheme";

export const Searcher = () => {
  const { fetchCity } = useWeather();
  const {theme} = useTheme()
  const [newCity, setNewCity] = useState("");

  const handleNewCity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCity(newCity);
  };

  return (
    <div className={`${styles.searcherContainer} ${styles[theme]}`}>
      <form onSubmit={handleNewCity}>
        <img src={SearchIcon} alt="Search" />
        <input
          type="text"
          placeholder="Buscar ciudad"
          onChange={(e) => setNewCity(e.target.value)}
          value={newCity}
        />
      </form>
    </div>
  );
};
