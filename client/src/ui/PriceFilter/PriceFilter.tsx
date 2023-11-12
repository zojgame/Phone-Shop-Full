import { SORT_BY } from "../../const";
import styles from "./styles.module.css";

interface PriceFilterUIProps {
  isDescending: boolean;
  sorting: SORT_BY;
  handleOnSortingClick: (sortBy: SORT_BY) => () => void;
}

const PriceFilterUI = ({
  isDescending,
  handleOnSortingClick,
  sorting,
}: PriceFilterUIProps) => {
  const sortBy = isDescending
    ? SORT_BY.ASCENDING_PRICE
    : SORT_BY.DESCENDING_PRICE;

  const isSelected =
    sorting === SORT_BY.DESCENDING_PRICE || sorting === SORT_BY.ASCENDING_PRICE;
  return (
    <div
      onClick={handleOnSortingClick(sortBy)}
      className={`${styles.priceSorting} ${
        isSelected ? `${styles.selected}` : ""
      }`}
    >
      по цене
      {isDescending ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 6.75H3.75M16.25 12H3.75M12 17.25H3.75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 17.25H3.75M16.25 12H3.75M12 6.75H3.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export { PriceFilterUI };
