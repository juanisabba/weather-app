import moment from "moment";
import { Hour } from "../../interfaces/weather.interface";
import styles from "./styles.module.less"

interface Props{
    hour: Hour;
    index: number;
    selected: number;
    onClick: (hour: Hour, index: number) => void;
}

export const SingleHour = ({hour, index, selected, onClick}: Props) => {
  return (
    <div
    onClick={() => onClick(hour, index)}
    className={`${styles.hoursList} ${
      selected === index ? styles.selected : styles.unselected
    }`}
  >
    <p>{index === 0 ? "Now" : moment(hour.time).format("HH")}</p>
    <img src={hour.condition.icon} alt={hour.condition.text} />
    <p>{Math.round(hour.temp_c)}°C</p>
  </div>  )
}
