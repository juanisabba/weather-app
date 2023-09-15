import { useState, FormEvent } from "react";
import { useWeather } from "../../hooks/useWeather";

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
    <div>
      <form onSubmit={handleNewCity}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setNewCity(e.target.value)}
          value={newCity}
        />
        <button>Search</button>
      </form>
      {errorMessage && (
        <p>Introduce mínimo 3 letras para una búsqueda más eficiente</p>
      )}
    </div>
  );
};
