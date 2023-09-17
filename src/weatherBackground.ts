import {
  SunnyDay,
  CloudyDay,
  RainyDay,
  ClearNight,
  Mist,
  Snow,
  StormyDay,
  PartlyCloudyDay,
  PartlyCloudyNight,
} from "./assets/background";

interface Props {
  [timeOfDay: string]: {
    [weatherText: string]: string;
  };
}

export const weatherBackgrounds: Props = {
  day: {
    "Sunny": SunnyDay,
    "Partly cloudy": PartlyCloudyDay,
    "Cloudy": CloudyDay,
    "Overcast": CloudyDay,
    "Mist": Mist,
    "Patchy rain possible": RainyDay,
    "Patchy snow possible": Snow,
    "Patchy sleet possible": RainyDay,
    "Patchy freezing drizzle possible": RainyDay,
    "Thundery outbreaks possible": StormyDay,
    "Blowing snow": Snow,
    "Blizzard": Snow,
    "Fog": Mist,
    "Freezing fog": Mist,
    "Patchy light drizzle": RainyDay,
    "Light drizzle": RainyDay,
    "Freezing drizzle": RainyDay,
    "Heavy freezing drizzle": RainyDay,
    "Patchy light rain": RainyDay,
    "Light rain": RainyDay,
    "Moderate rain at times": RainyDay,
    "Moderate rain": RainyDay,
    "Heavy rain at times": RainyDay,
    "Heavy rain": RainyDay,
    "Light freezing rain": RainyDay,
    "Moderate or heavy freezing rain": RainyDay,
    "Light sleet": RainyDay,
    "Moderate or heavy sleet": RainyDay,
    "Patchy light snow": Snow,
    "Light snow": Snow,
    "Patchy moderate snow": Snow,
    "Moderate snow": Snow,
    "Patchy heavy snow": Snow,
    "Heavy snow": Snow,
    "Ice pellets": Snow,
    "Light rain shower": RainyDay,
    "Moderate or heavy rain shower": RainyDay,
    "Torrential rain shower": RainyDay,
    "Light sleet showers": RainyDay,
    "Moderate or heavy sleet showers": RainyDay,
    "Light snow showers": Snow,
    "Moderate or heavy snow showers": Snow,
    "Light showers of ice pellets": Snow,
    "Moderate or heavy showers of ice pellets": Snow,
    "Patchy light rain with thunder": StormyDay,
    "Moderate or heavy rain with thunder": StormyDay,
    "Patchy light snow with thunder": StormyDay,
    "Moderate or heavy snow with thunder": StormyDay,
  },
  night: {
    "Clear": ClearNight,
    "Partly cloudy": PartlyCloudyNight,
    "Cloudy": CloudyDay,
    "Overcast": CloudyDay,
    "Mist": Mist,
    "Patchy rain possible": RainyDay,
    "Patchy snow possible": Snow,
    "Patchy sleet possible": RainyDay,
    "Patchy freezing drizzle possible": RainyDay,
    "Thundery outbreaks possible": StormyDay,
    "Blowing snow": Snow,
    "Blizzard": Snow,
    "Fog": Mist,
    "Freezing fog": Mist,
    "Patchy light drizzle": RainyDay,
    "Light drizzle": RainyDay,
    "Freezing drizzle": RainyDay,
    "Heavy freezing drizzle": RainyDay,
    "Patchy light rain": RainyDay,
    "Light rain": RainyDay,
    "Moderate rain at times": RainyDay,
    "Moderate rain": RainyDay,
    "Heavy rain at times": RainyDay,
    "Heavy rain": RainyDay,
    "Light freezing rain": RainyDay,
    "Moderate or heavy freezing rain": RainyDay,
    "Light sleet": RainyDay,
    "Moderate or heavy sleet": RainyDay,
    "Patchy light snow": Snow,
    "Light snow": Snow,
    "Patchy moderate snow": Snow,
    "Moderate snow": Snow,
    "Patchy heavy snow": Snow,
    "Heavy snow": Snow,
    "Ice pellets": Snow,
    "Light rain shower": RainyDay,
    "Moderate or heavy rain shower": RainyDay,
    "Torrential rain shower": RainyDay,
    "Light sleet showers": RainyDay,
    "Moderate or heavy sleet showers": RainyDay,
    "Light snow showers": Snow,
    "Moderate or heavy snow showers": Snow,
    "Light showers of ice pellets": Snow,
    "Moderate or heavy showers of ice pellets": Snow,
    "Patchy light rain with thunder": StormyDay,
    "Moderate or heavy rain with thunder": StormyDay,
    "Patchy light snow with thunder": StormyDay,
    "Moderate or heavy snow with thunder": StormyDay,
  },
};
