import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { DailyForecast } from "./components/dailyForecast/DailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast/WeeklyForecast";
import { CircularSpinner } from "./components/spinner/CircularSpinner";
import { FavoritesList } from "./components/favorites";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { useWeather } from "./hooks/useWeather";
import { SunnyDay, CloudyDay, RainyDay } from "./assets/background";
import "./App.less";
import { Header } from "./components/header/Header";

export const App = () => {
  const { mode: theme } = useSelector((state: RootState) => state.theme);
  const { isLoading } = useWeather();

  return (
    <div className="app" style={{ backgroundImage: `url("${SunnyDay}")` }}>
      {isLoading ? (
        <CircularSpinner />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
