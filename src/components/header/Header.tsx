import { Searcher } from './Searcher'
import styles from './styles.module.less'

interface Props {
  onClick: () => void;
}

export const Header = ({onClick}: Props) => {
  return (
    <div className={styles.headerContainer}>
        <Searcher/>
        <p onClick={onClick}>Mis Favoritos</p>
    </div>
  )
}
