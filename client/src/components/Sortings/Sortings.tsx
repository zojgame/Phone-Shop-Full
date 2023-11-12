import { useEffect, useState } from "react";
import { PriceFilterUI, PopularFilterUI } from "../../ui";
import styles from "./styles.module.css";
import { SORT_BY, sortProducts } from "../../const";
import { useStorage } from "../../hooks";
import { useStore } from "../../store/store";
import { PaginationComponent } from "..";

const SortingsComponent = () => {
  const [sorting, setSorting] = useState(SORT_BY.POPULAR);
  const [storedSorting, setStoredSorting] = useStorage(
    "sorting",
    SORT_BY.POPULAR
  );
  const [isDescending, setIsDescending] = useState(
    storedSorting === SORT_BY.DESCENDING_PRICE
  );
  const { products, setProducts } = useStore();

  useEffect(() => {
    setSorting(storedSorting);
  }, [storedSorting]);

  const handleOnSortingClick = (sortBy: SORT_BY) => {
    return () => {
      const sortedProducts = sortProducts(sortBy, products);
      if (
        sortBy === SORT_BY.ASCENDING_PRICE ||
        sortBy === SORT_BY.DESCENDING_PRICE
      ) {
        setIsDescending((prev) => !prev);
      }
      setSorting(sortBy);
      setStoredSorting(sortBy);
      setProducts(sortedProducts);
    };
  };

  return (
    <div className={styles.filtersContainer}>
      <h1>Смартфоны</h1>
      <div className={styles.filters}>
        <div className={styles.sorting}>
          <PopularFilterUI
            sorting={sorting}
            handleOnSortingClick={handleOnSortingClick}
          />
          <PriceFilterUI
            isDescending={isDescending}
            sorting={sorting}
            handleOnSortingClick={handleOnSortingClick}
          />
        </div>
        <PaginationComponent />
      </div>
    </div>
  );
};
export { SortingsComponent };
