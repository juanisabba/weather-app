import { Searcher } from './Searcher'
import styles from './header.module.less'

interface Props {
  onClick: () => void;
}

export const Header = ({onClick}: Props) => {
  return (
    <div className={styles.container}>
        <Searcher/>
        <p onClick={onClick}>Mis Favoritos</p>
    </div>
  )
}
