import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import { DailyForecast } from "./components/dailyForecast/DailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast/WeeklyForecast";
import { Searcher } from "./components/searcher";
import { CircularSpinner } from "./components/spinner/CircularSpinner";
import { FavoritesList } from "./components/favorites";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { useWeather } from "./hooks/useWeather";
import { SunnyDay, CloudyDay, RainyDay } from "./assets/background";
import "./App.less";

export const App = () => {
  const { mode: theme } = useSelector((state: RootState) => state.theme);
  const { isLoading } = useWeather();

  return (
    <div className="app" style={{backgroundImage: `url("${RainyDay}")`}}>
      {isLoading ? (
        <CircularSpinner />
      ) : (
        <>
          <div>
            <CurrentWeather />
            <DailyForecast />
          </div>
          <div>
            <Searcher />
            <WeeklyForecast />
          </div>
          {/* <FavoritesList /> */}
        </>
      )}
    </div>
  );
};
