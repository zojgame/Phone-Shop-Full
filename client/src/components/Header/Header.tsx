import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useStore } from "../../store/store";
import { useStorage } from "../../hooks";
import { useEffect } from "react";

const HeaderComponent = () => {
  const { setProductsCart, productsInCart } = useStore();
  const [storageProductsInCart] = useStorage("productsInCart", []);
  const navigate = useNavigate();

  const handleOnCartClick = () => {
    navigate(`/cart`);
  };

  useEffect(() => {
    setProductsCart(storageProductsInCart);
  }, [setProductsCart, storageProductsInCart]);
  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.logo}>graff.shop</div>
        <div className={styles.basket} onClick={handleOnCartClick}>
          {productsInCart.length !== 0 && (
            <div className={styles.productCount}>{productsInCart.length}</div>
          )}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3H3.636C4.146 3 4.591 3.343 4.723 3.835L5.106 5.272M5.106 5.272C10.6766 5.11589 16.2419 5.73515 21.642 7.112C20.818 9.566 19.839 11.95 18.718 14.25H7.5M5.106 5.272L7.5 14.25M7.5 14.25C6.70435 14.25 5.94129 14.5661 5.37868 15.1287C4.81607 15.6913 4.5 16.4544 4.5 17.25H20.25M6 20.25C6 20.4489 5.92098 20.6397 5.78033 20.7803C5.63968 20.921 5.44891 21 5.25 21C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25C4.5 20.0511 4.57902 19.8603 4.71967 19.7197C4.86032 19.579 5.05109 19.5 5.25 19.5C5.44891 19.5 5.63968 19.579 5.78033 19.7197C5.92098 19.8603 6 20.0511 6 20.25ZM18.75 20.25C18.75 20.4489 18.671 20.6397 18.5303 20.7803C18.3897 20.921 18.1989 21 18 21C17.8011 21 17.6103 20.921 17.4697 20.7803C17.329 20.6397 17.25 20.4489 17.25 20.25C17.25 20.0511 17.329 19.8603 17.4697 19.7197C17.6103 19.579 17.8011 19.5 18 19.5C18.1989 19.5 18.3897 19.579 18.5303 19.7197C18.671 19.8603 18.75 20.0511 18.75 20.25Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
export { HeaderComponent };
