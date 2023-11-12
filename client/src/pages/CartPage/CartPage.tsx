import styles from "./styles.module.css";
import { GoBackButtonComponent, CartProductComponent } from "../../components";
import { useStorage } from "../../hooks";
import { Product } from "../../types";

const CartPage = () => {
  const [storageProductsInCart] = useStorage("productsInCart", []);
  return (
    <div className={styles.cartPageContainer}>
      <GoBackButtonComponent />
      {storageProductsInCart.map((product: Product) => (
        <CartProductComponent product={product} key={product.id} />
      ))}
    </div>
  );
};
export { CartPage };
