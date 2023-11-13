import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { getProducts } from "../../api";
import {
  SortingsComponent,
  ColorsFilterComponent,
  ProductsComponent,
} from "../../components";
import styles from "./styles.module.css";
import { SORT_BY, sortProducts, filterProductsByColors } from "../../const";
import { LoaderUI } from "../../ui";

const MainPage = () => {
  const page = Number(useParams().page) ?? 1;
  const { products, setProducts, colors } = useStore();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedValue = sessionStorage.getItem("sorting");
    const storedSorting = storedValue
      ? JSON.parse(storedValue)
      : SORT_BY.POPULAR;

    setIsLoading(true);
    getProducts(page).then((data) => {
      setIsLoading(false);
      const sortedProduct = sortProducts(storedSorting, data);
      const filteredProducts = filterProductsByColors(colors, sortedProduct);
      setProducts(filteredProducts);
    });
  }, [colors, setProducts, page]);

  return (
    <div className={styles.mainPageContainer}>
      <SortingsComponent />
      <div className={styles.colorsAndProductsContainer}>
        <ColorsFilterComponent />
        {!isLoading ? (
          <ProductsComponent products={products} />
        ) : (
          <div className={styles.loaderContainer}>
            <LoaderUI />
          </div>
        )}
      </div>
    </div>
  );
};
export { MainPage };
