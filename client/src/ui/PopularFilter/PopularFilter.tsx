import styles from "./styles.module.css";
import { SORT_BY } from "../../const";

interface PopularFilterUIProps {
  sorting: SORT_BY;
  handleOnSortingClick: (sortBy: SORT_BY) => () => void;
}

const PopularFilterUI = ({
  sorting,
  handleOnSortingClick,
}: PopularFilterUIProps) => {
  return (
    <div
      onClick={handleOnSortingClick(SORT_BY.POPULAR)}
      className={`${styles.popularSorting} ${
        sorting === SORT_BY.POPULAR ? `${styles.selected}` : ""
      }`}
    >
      по популярности
    </div>
  );
};
export { PopularFilterUI };
