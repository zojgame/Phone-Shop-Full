import { Product } from "../../types";
import { AddToCartButton } from "../../ui";
import styles from "./styles.module.css";

interface DetailProductComponentProps {
  product: Product;
}

const DetailProductComponent = ({ product }: DetailProductComponentProps) => {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.name} />
      <div className={styles.productDetail}>
        <div>
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
          <div className={styles.productSecondSection}>
            <div className={styles.productPrice}>{product.price} ₽</div>
            <AddToCartButton product={product} />
          </div>
        </div>
        <div className={styles.productDescription}>
          <h3>Описание</h3>
          <p>{product.desc}</p>
        </div>
      </div>
    </div>
  );
};

export { DetailProductComponent };
