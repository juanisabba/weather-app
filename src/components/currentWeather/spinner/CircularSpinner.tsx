import styles from "./circular-spinner.module.css";

interface Props {
  color: string;
}

export const CircularSpinner = ({ color }: Props) => {
  return (
    <div className={styles.spinner__container}>
      <div
        style={{ borderTopColor: color, borderRightColor: color }}
        className={styles.spinner}
      ></div>
    </div>
  );
};
