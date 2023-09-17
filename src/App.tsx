import { useState } from "react";

import { Header } from "./components/header/Header";
import { FavoritesList } from "./components/favorites/FavoritesList";
import { CircularSpinner } from "./components/spinner/CircularSpinner";
import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { DailyForecast } from "./components/dailyForecast/DailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast/WeeklyForecast";
import { SuscriptionModal } from "./components/suscriptionModal/SuscriptionModal";

import { useTheme } from "./hooks/useTheme";
import { useWeather } from "./hooks/useWeather";
import { weatherBackgrounds } from "./weatherBackground";

import { ToastContainer } from "react-toastify";
import moment from "moment";

import styles from "./App.module.less";

import "moment/dist/locale/es";
import { PartlyCloudyDay } from "./assets/background";
moment.locale("es");

export const App = () => {
  const [openFavorites, setOpenFavorites] = useState(false);
  const { requests, isLoading, selectedTime, data } = useWeather();
  const { theme } = useTheme();

  const handleFavoriteList = () => {
    if (openFavorites) setOpenFavorites(false);
  };

  const timeOfDay = selectedTime?.is_day === 0 ? "night" : selectedTime?.is_day === 1 ? "day" : null;

  // Change the background depending on the weather
  const backgorundWeather = timeOfDay && selectedTime
    ? weatherBackgrounds[timeOfDay][selectedTime?.condition.text]
    : timeOfDay && data ? weatherBackgrounds[timeOfDay][data?.current.condition.text] : PartlyCloudyDay;
  return (
    <div
      className={`${styles.appContainer} ${styles[theme]}`}
      style={{
        backgroundImage: `url("${backgorundWeather}")`,
      }}
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
          <div className={styles.app} onClick={handleFavoriteList}>
            <Header onClick={() => setOpenFavorites(true)} />
            <div className={styles.appBody}>
              <div className={styles.bodyInfo}>
                <CurrentWeather />
                <DailyForecast />
              </div>
              <div className={styles.bodyForecast}>
                <WeeklyForecast />
              </div>
            </div>
            <p className={styles.footer}>
              Peticiones gratuitas: {requests} / 5
            </p>
          </div>
          {requests > 5 && <SuscriptionModal />}
        </>
      )}
    </div>
  );
};
