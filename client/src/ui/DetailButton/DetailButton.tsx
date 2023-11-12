import styles from "./styles.module.css";

interface DetailButtonUIProps {
  handleOnClick: () => void;
}

const DetailButtonUI = ({ handleOnClick }: DetailButtonUIProps) => {
  return (
    <div className={styles.detailBtn} onClick={handleOnClick}>
      Подробнее
    </div>
  );
};
export { DetailButtonUI };
