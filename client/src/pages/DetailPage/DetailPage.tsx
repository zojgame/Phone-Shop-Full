import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrent } from "../../api";
import styles from "./styles.module.css";
import {
  DetailProductComponent,
  GoBackButtonComponent,
} from "../../components";
import { Product } from "../../types";
import { LoaderUI } from "../../ui";

const DetailPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [currentProduct, setCurrentProduct] = useState<Product>();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getCurrent(id).then((data) => {
        setCurrentProduct(data);
        setIsLoading(false);
      });
    }
  }, [id]);

  return (
    <div className={styles.detailPageContainer}>
      <GoBackButtonComponent />
      {isLoading ? (
        <LoaderUI />
      ) : (
        currentProduct && <DetailProductComponent product={currentProduct} />
      )}
    </div>
  );
};
export { DetailPage };
