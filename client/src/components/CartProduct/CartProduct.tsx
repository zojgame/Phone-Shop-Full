import { Product } from "../../types";
import { AddToCartButton } from "../../ui";
import styles from "./styles.module.css";

interface CartProductComponentProps {
  product: Product;
}

const CartProductComponent = ({ product }: CartProductComponentProps) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={product.image} alt={product.name} />
        <div className={styles.productFirstSection}>
          <div className={styles.productInfo}>
            <p className={styles.productName}>{product.name}</p>
            <div className={styles.productColors}>
              {product.colors.map((color) => (
                <div className={styles[color]} key={color}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productSecondSection}>
        <div className={styles.productPrice}>{product.price} ₽</div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};
export { CartProductComponent };
