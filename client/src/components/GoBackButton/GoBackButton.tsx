import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const GoBackButtonComponent = () => {
  const navigate = useNavigate();
  const handleOnGoBackButtonClick = () => {
    navigate(`../`);
  };

  return (
    <div className={styles.goBackButton} onClick={handleOnGoBackButtonClick}>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99998 15L1 7.99998L7.99998 1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Назад
    </div>
  );
};
export { GoBackButtonComponent };
