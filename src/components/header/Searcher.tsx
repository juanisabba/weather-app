import { useState, FormEvent } from "react";
import { useWeather } from "../../hooks/useWeather";
import {SearchIcon} from "../../assets/icons"
import styles from "./header.module.less";

export const Searcher = () => {
  const [newCity, setNewCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const {fetchCity} = useWeather()

  const handleNewCity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newCity.length < 3) {
      setErrorMessage(true);
      return;
    }
        fetchCity(newCity);
        setErrorMessage(false);
  };
  return (
    <div className={styles.searcherContainer}>
      <form onSubmit={handleNewCity}>
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Buscar ciudad"
          onChange={(e) => setNewCity(e.target.value)}
          value={newCity}
        />
      </form>
      
        <p>{errorMessage && "Introduce mínimo 3 letras para una búsqueda más eficiente"}</p>
    </div>
  );
};
