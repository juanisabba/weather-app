import { SuscriptionPlan } from "./SuscriptionPlan"
import { basicPlan, premiumPlan, standardPlan } from "./data/plansData"
import styles from "./styles.module.less"

export const SuscriptionModal = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>Haz alcanzado el límite de búsquedas gratuitas. ¡Vuélvete miembro!</h2>
        <div className={styles.cardsContainer}>
          <SuscriptionPlan title="Basic" price={2.99} benefits={basicPlan} color="orange"/>
          <SuscriptionPlan title="Standard" price={4.99} benefits={standardPlan} color="blue"/>
          <SuscriptionPlan title="Premium" price={9.99} benefits={premiumPlan} color="brown"/>
        </div>
      </div>
    </div>
  )
}
