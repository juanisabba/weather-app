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
import moment from 'moment'
import 'moment/dist/locale/es';
moment.locale('es')


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
          <div className="app-container" onClick={handleFavoriteList}>
            <Header onClick={() => setOpenFavorites(true)} />
            <div className="app-body">
              <div className="body-info">
                <CurrentWeather />
                <DailyForecast />
              </div>
              <div className="body-forecast">
                <WeeklyForecast />
              </div>
            </div>
            <p className="footer">
              Peticiones gratuitas: {requests} / 5
            </p>
          </div>
          {requests > 5 && <SuscriptionModal />}
        </>
      )}
    </div>
  );
};
