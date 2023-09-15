import styles from "./circular-spinner.module.less";

export const CircularSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};
