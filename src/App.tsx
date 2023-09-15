import { CurrentWeather } from "./components/currentWeather";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { DailyForecast } from "./components/dailyForecast";
import { WeeklyForecast } from "./components/weeklyForecast";
import { Searcher } from "./components/searcher";
import { FavoritesList } from "./components/favorites";

export const App = () => {
  const { mode: theme } = useSelector((state: RootState) => state.theme);
  console.log(theme);

  return (
    <div>
      <Searcher/>
      <CurrentWeather />
      <div>
        {/* <b>DAILY</b>
        <DailyForecast/>
          <b>WEEKLY</b>
        <WeeklyForecast/> */}
      </div>
      <FavoritesList/>
    </div>
  );
};
