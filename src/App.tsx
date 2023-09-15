import { CurrentWeather } from "./components/currentWeather";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { DailyForecast } from "./components/dailyForecast";

export const App = () => {
  const { mode: theme } = useSelector((state: RootState) => state.theme);
  console.log(theme);

  return (
    <div>
      <CurrentWeather />
      <div>
        <DailyForecast/>
      </div>
    </div>
  );
};
