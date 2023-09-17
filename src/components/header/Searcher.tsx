import { useState, FormEvent } from "react";
import { useWeather } from "../../hooks/useWeather";
import { SearchIcon } from "../../assets/icons";
import { useTheme } from "../../hooks/useTheme";
import styles from "./styles.module.less";

export const Searcher = () => {
  const [newCity, setNewCity] = useState("");
  const { fetchCity } = useWeather();
  const { theme } = useTheme();

  //Search city
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
