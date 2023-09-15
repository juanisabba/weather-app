import { CurrentWeather } from "./components/currentWeather";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export const App = () => {
  const { mode: theme } = useSelector((state: RootState) => state.theme);
  console.log(theme)

  return <CurrentWeather/>;
};
