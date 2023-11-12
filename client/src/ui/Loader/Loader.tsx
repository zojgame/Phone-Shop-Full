import styles from "./styles.module.css";

const LoaderUI = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};
export { LoaderUI };
