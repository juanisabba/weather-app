import { useTheme } from '../../hooks/useTheme';
import { Searcher } from './Searcher';
import {SunIcon, MoonIcon} from "../../assets/icons"
import styles from './styles.module.less'

interface Props {
  onClick: () => void;
}

export const Header = ({onClick}: Props) => {
  const {toggle, theme} = useTheme()
  return (
    <div className={`${styles.headerContainer} ${styles[theme]}`}>
        <Searcher/>
        <div className={styles.iconsContainer}>
        <button onClick={toggle} className={styles.themeContainer}>
          <img src={theme === 'light' ? MoonIcon : SunIcon} alt="Change Theme Icon" />
        </button>
        <button className={styles.buttonFavorite} onClick={onClick}>Mis Favoritos</button>
        </div>
    </div>
  )
}
