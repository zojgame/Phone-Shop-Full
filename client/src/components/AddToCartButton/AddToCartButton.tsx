import { useStore } from "../../store/store";
import { useStorage } from "../../hooks";
import { Product } from "../../types";
import styles from "./styles.module.css";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToProductCart, productsInCart, deleteProductCart } = useStore();
  const [, setStorageProductsInCart] = useStorage("productsInCart", []);

  const handleAddToButtonClick = () => {
    const updatedProducts = [...productsInCart, product];
    setStorageProductsInCart(updatedProducts);
    addToProductCart(product);
  };
  const handleDeleteButtonClick = () => {
    const updatedProducts = [...productsInCart].filter(
      (prod) => prod.id !== product.id
    );
    setStorageProductsInCart(updatedProducts);
    deleteProductCart(product);
  };

  return (
    <>
      {!productsInCart.some((prod) => prod.id === product.id) ? (
        <div
          className={styles.productAddToCartBtn}
          onClick={handleAddToButtonClick}
        >
          В корзину
        </div>
      ) : (
        <div
          className={`${styles.productAddToCartBtn}`}
          onClick={handleDeleteButtonClick}
        >
          Удалить
        </div>
      )}
    </>
  );
};
export { AddToCartButton };
