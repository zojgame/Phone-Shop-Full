import styles from "./styles.module.css";

interface PaginationArrowProps {
  isLeft: boolean;
  handleOnClick: () => void;
  isDisabled: boolean;
}

const PaginationArrow = ({
  isLeft,
  isDisabled,
  handleOnClick,
}: PaginationArrowProps) => {
  return (
    <svg
      onClick={handleOnClick}
      className={`${isLeft ? "" : `${styles.left}`} ${
        isDisabled ? `${styles.disabled}` : ""
      }`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 19L8 12L15 5"
        stroke="#A3A7BF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { PaginationArrow };
