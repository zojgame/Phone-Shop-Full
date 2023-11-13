import { useNavigate } from "react-router-dom";
import { Product } from "../../types";
import { DetailButtonUI, AddToCartButton } from "../../ui";
import styles from "./styles.module.css";

interface ProductComponentProps {
  product: Product;
}

const ProductComponent = ({ product }: ProductComponentProps) => {
  const navigate = useNavigate();

  const handleOnDetailButtonClick = () => {
    navigate(`../current/${product.id}`);
  };

  return (
    <div className={styles.product}>
      <div>
        <img src={product.image} alt={product.name} />
        <div className={styles.productContainer}>
          <div className={styles.productFirstSection}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.productColors}>
                {product.colors.map((color) => (
                  <div className={styles[color]} key={color}></div>
                ))}
              </div>
            </div>
            <DetailButtonUI handleOnClick={handleOnDetailButtonClick} />
          </div>
          <div className={styles.productSecondSection}>
            <div className={styles.productPrice}>{product.price} ₽</div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
export { ProductComponent };
