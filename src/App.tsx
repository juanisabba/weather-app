import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { DailyForecast } from "./components/dailyForecast/DailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast/WeeklyForecast";
import { CircularSpinner } from "./components/spinner/CircularSpinner";
import { Header } from "./components/header/Header";
// import { FavoritesList } from "./components/favorites";
// import { RootState } from "./redux/store";
// import { useSelector } from "react-redux";
import { useWeather } from "./hooks/useWeather";
import { ToastContainer } from "react-toastify";
import { SunnyDay } from "./assets/background";
import "./App.less";
import { SuscriptionModal } from "./components/suscriptionModal/SuscriptionModal";

export const App = () => {
  // const { mode: theme } = useSelector((state: RootState) => state.theme);
  const { requests, isLoading } = useWeather();

  return (
    <div className="app" style={{ backgroundImage: `url("${SunnyDay}")` }}>
      {isLoading ? (
        <CircularSpinner />
      ) : (
        <>
          <ToastContainer />
          <Header />
          <div className="app-body">
            <div>
              <CurrentWeather />
              <DailyForecast />
            </div>
            <div>
              <WeeklyForecast />
            </div>
            {/* <FavoritesList /> */}
          </div>
          <p>Peticiones gratuitas: {requests} / 5</p>
          {requests >= 5 && <SuscriptionModal />}
        </>
      )}
    </div>
  );
};
