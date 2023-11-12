import { create } from "zustand";
import { Product, ColorsFilter } from "../types";
import { COLORS_INITIAL_STATE } from "../const";

interface ProductsStore {
  products: Product[];
  productsInCart: Product[];
  colors: ColorsFilter;
  setProducts: (products: Product[]) => void;
  setProductsCart: (products: Product[]) => void;
  addToProductCart: (product: Product) => void;
  deleteProductCart: (product: Product) => void;
  setColors: (colors: ColorsFilter) => void;
}

const useStore = create<ProductsStore>((set) => ({
  products: [],
  productsInCart: [],
  colors: COLORS_INITIAL_STATE,
  setProducts: (products: Product[]) => {
    set(() => ({
      products: products,
    }));
  },
  setProductsCart: (products: Product[]) => {
    set(() => ({
      productsInCart: products,
    }));
  },
  addToProductCart: (product: Product) => {
    set((state) => ({
      productsInCart: [...state.productsInCart, product],
    }));
  },
  deleteProductCart: (product: Product) => {
    set((state) => {
      const updatedBasket = [...state.productsInCart].filter(
        (prod) => prod.id !== product.id
      );

      return {
        productsInCart: updatedBasket,
      };
    });
  },
  setColors: (colors: ColorsFilter) => {
    set(() => ({
      colors: colors,
    }));
  },
}));

export { useStore };
