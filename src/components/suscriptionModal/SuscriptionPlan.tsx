import { ISuscriptionPlan } from "../../interfaces/suscription-plans.interface";
import { CheckIcon, CrossIcon } from "../../assets/icons";
import styles from "./styles.module.less";

interface Props {
  title: string;
  price: number;
  benefits: ISuscriptionPlan[];
  color: string;
}

export const SuscriptionPlan = ({ title, price, benefits, color }: Props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle} style={{ color }}>
        <i>{title}</i>
      </h3>
      <div>
        <h4 className={styles.price}>${price} / Mes</h4>
        <div className={styles.info} style={{ backgroundColor: color }}>
          {benefits.map(({ id, included, name }) => (
            <div key={id} className={styles.infoItem}>
              <img src={included ? CheckIcon : CrossIcon} alt="" />
              <p>{name}</p>
            </div>
          ))}
        </div>
        <button style={{ backgroundColor: color }}>Suscribirse</button>
      </div>
    </div>
  );
};
