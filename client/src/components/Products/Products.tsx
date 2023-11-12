import { ProductComponent } from "..";
import { Product } from "../../types";
import styles from "./styles.module.css";

interface ProductsComponentProps {
  products: Product[];
}

const ProductsComponent = ({ products }: ProductsComponentProps) => {
  return (
    <div className={styles.productsContainer}>
      {products?.map((product) => (
        <ProductComponent product={product} key={product.id} />
      ))}
    </div>
  );
};
export { ProductsComponent };
