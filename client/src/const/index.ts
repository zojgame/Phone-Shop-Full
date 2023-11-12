import { ColorsFilter, Color, Product } from "../types";

export const COLORS: Color[] = [
  { value: "black", label: "Черный" },
  { value: "blue", label: "Синий" },
  { value: "green", label: "Зелёный" },
  { value: "purple", label: "Фиолетовый" },
  { value: "white", label: "Белый" },
];

export const COLORS_INITIAL_STATE: ColorsFilter = {
  black: false,
  white: false,
  green: false,
  purple: false,
  blue: false,
};

export enum SORT_BY {
  POPULAR = "popular",
  ASCENDING_PRICE = "ascending price",
  DESCENDING_PRICE = "descending price",
}

export const sortProducts = (sortBy: SORT_BY, products: Product[]) => {
  if (sortBy === SORT_BY.POPULAR) {
    const sortedProducts = products.sort((productA, productB) => {
      return productA.popularity - productB.popularity;
    });
    return sortedProducts;
  }
  if (sortBy === SORT_BY.ASCENDING_PRICE) {
    const sortedProducts = products.sort((productA, productB) => {
      return productA.price - productB.price;
    });
    return sortedProducts;
  }

  const sortedProducts = products.sort((productA, productB) => {
    return productB.price - productA.price;
  });
  return sortedProducts;
};

export const filterProductsByColors = (
  colors: ColorsFilter,
  products: Product[]
) => {
  const isFilterReset = COLORS.every((color) => !colors[color.value]);
  const filteredProducts = products.filter(
    (product) => isFilterReset || product.colors.some((color) => colors[color])
  );

  return filteredProducts;
};

export const PAGE_LIMIT = 5;
