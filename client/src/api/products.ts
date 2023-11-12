import { PAGE_LIMIT } from "../const";
import { URL_PRODUCTS } from "./urls";

const getProducts = async (page?: number, limit?: number) => {
  const pageLimit = limit || PAGE_LIMIT;
  const currentPage = page || 1;
  const url = `${URL_PRODUCTS}?page=${currentPage}&limit=${pageLimit}`;
  try {
    const results = await fetch(url);
    const products = await results.json();

    return products;
  } catch (error) {
    console.log("error", error);
  }
};

const getCurrent = async (productId: string) => {
  const urlCurrentProduct = `${URL_PRODUCTS}/${productId}`;
  try {
    const results = await fetch(urlCurrentProduct);
    const product = await results.json();

    return product;
  } catch (error) {
    console.log("error", error);
  }
};

export { getProducts, getCurrent };
