import { useState } from "react";
import { Header } from "./components/header/Header";
import { FavoritesList } from "./components/favorites/FavoritesList";
import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { DailyForecast } from "./components/dailyForecast/DailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast/WeeklyForecast";
import { CircularSpinner } from "./components/spinner/CircularSpinner";
// import { RootState } from "./redux/store";
// import { useSelector } from "react-redux";
import { useWeather } from "./hooks/useWeather";
import { ToastContainer } from "react-toastify";
import { SuscriptionModal } from "./components/suscriptionModal/SuscriptionModal";
import "./App.less";
import { weatherBackgrounds } from "./weatherBackground";
import { SunnyDay } from "./assets/background";

export const App = () => {
  // const { mode: theme } = useSelector((state: RootState) => state.theme);
  const { requests, isLoading, selectedTime, data } = useWeather();
  const [openFavorites, setOpenFavorites] = useState(false);

  const handleFavoriteList = () => {
    if (openFavorites) setOpenFavorites(false);
  };

  const backgorundWeather = selectedTime
    ? weatherBackgrounds[selectedTime?.condition.text]
    : data
    ? weatherBackgrounds[data?.current.condition.text]
    : SunnyDay;

  return (
    <div
      className="app"
      style={{ backgroundImage: `url("${backgorundWeather}")` }}
    >
      {isLoading ? (
        <CircularSpinner />
      ) : (
        <>
          <ToastContainer />
          <FavoritesList
            visible={openFavorites}
            closeMenu={() => setOpenFavorites(false)}
          />
          <div onClick={handleFavoriteList}>
            <Header onClick={() => setOpenFavorites(true)} />
            <div className="app-body">
              <div>
                <CurrentWeather />
                <DailyForecast />
              </div>
              <div>
                <WeeklyForecast />
              </div>
            </div>
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              <b>Peticiones gratuitas: {requests} / 5</b>
            </p>
          </div>
          {requests > 5 && <SuscriptionModal />}
        </>
      )}
    </div>
  );
};
