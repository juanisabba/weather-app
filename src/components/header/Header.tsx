import { Searcher } from './Searcher'
import styles from './header.module.less'

export const Header = () => {
  return (
    <div className={styles.container}>
        <Searcher/>
    </div>
  )
}
