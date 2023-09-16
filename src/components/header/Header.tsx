import { Searcher } from './Searcher'
import styles from './styles.module.less'

interface Props {
  onClick: () => void;
}

export const Header = ({onClick}: Props) => {
  return (
    <div className={styles.headerContainer}>
        <Searcher/>
        <div className={styles.iconsContainer}>
        <button className={styles.buttonFavorite} onClick={onClick}>Mis Favoritos</button>
        </div>
    </div>
  )
}
