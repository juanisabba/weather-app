import { useState } from "react";
import { Header } from "./components/header/Header";
import { FavoritesList } from "./components/favorites/FavoritesList";
import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { DailyForecast } from "./components/dailyForecast/DailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast/WeeklyForecast";
import { CircularSpinner } from "./components/spinner/CircularSpinner";
import { useWeather } from "./hooks/useWeather";
import { ToastContainer } from "react-toastify";
import { SuscriptionModal } from "./components/suscriptionModal/SuscriptionModal";
import { weatherBackgrounds } from "./weatherBackground";
import { SunnyDay } from "./assets/background";
import moment from "moment";
import "moment/dist/locale/es";
import { useTheme } from "./hooks/useTheme";
import styles from "./App.module.less";

moment.locale("es");

export const App = () => {
  const { requests, isLoading, selectedTime, data } = useWeather();
  const [openFavorites, setOpenFavorites] = useState(false);
  const { theme } = useTheme();

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
            <p className={styles.footer}>Peticiones gratuitas: {requests} / 5</p>
          </div>
          {requests > 5 && <SuscriptionModal />}
        </>
      )}
    </div>
  );
};
