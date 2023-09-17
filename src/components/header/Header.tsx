import { useTheme } from "../../hooks/useTheme";
import { Searcher } from "./Searcher";
import { SunIcon, MoonIcon } from "../../assets/icons";
import styles from "./styles.module.less";
import { ToastContainer } from "react-toastify";

interface Props {
  onClick: () => void;
}

export const Header = ({ onClick }: Props) => {
  const { toggle, theme } = useTheme();
  return (
    <div className={`${styles.headerContainer} ${styles[theme]}`}>
                <ToastContainer />

      <Searcher />

      {/* Favorites and theme container */}
      <div className={styles.iconsContainer}>
        <button onClick={toggle} className={styles.themeContainer}>
          <img
            src={theme === "light" ? MoonIcon : SunIcon}
            alt="Change Theme Icon"
          />
           <span className={styles.tooltipText}>Cambiar tema</span>
        </button>
        <button className={styles.buttonFavorite} onClick={onClick}>
          Mis Favoritos
        </button>
      </div>
    </div>
  );
};
