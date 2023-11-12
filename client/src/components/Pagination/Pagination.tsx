import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PaginationArrow } from "../../ui";
import styles from "./styles.module.css";
import { useStore } from "../../store/store";
import { PAGE_LIMIT } from "../../const";

const PaginationComponent = () => {
  const page = Number(useParams().page) || 1;
  const navigate = useNavigate();
  const { products } = useStore();
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
  const [isPrevPageDisabled, setIsPrevPageDisabled] = useState(false);

  useEffect(() => {
    setIsNextPageDisabled(products.length < PAGE_LIMIT);
    setIsPrevPageDisabled(page - 1 < 1);
  }, [products, page]);

  const handleOnLeftClick = () => {
    if (page > 1) {
      setIsNextPageDisabled(false);
      const prevPage = page - 1;
      navigate(`../${prevPage}`);
    }
  };
  const handleOnRightClick = () => {
    if (products.length === PAGE_LIMIT) {
      setIsPrevPageDisabled(false);
      const nextPage = page + 1;
      navigate(`../${nextPage}`);
    }
  };

  return (
    <div className={styles.pagination}>
      <PaginationArrow
        isLeft={true}
        handleOnClick={handleOnLeftClick}
        isDisabled={isPrevPageDisabled}
      />
      {page}
      <PaginationArrow
        isLeft={false}
        handleOnClick={handleOnRightClick}
        isDisabled={isNextPageDisabled}
      />
    </div>
  );
};
export { PaginationComponent };
