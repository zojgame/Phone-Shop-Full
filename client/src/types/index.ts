interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  popularity: number;
  desc: string;
}

interface Color {
  value: string;
  label: string;
}

type ColorsFilter = Record<string, boolean>;

export type { Product, ColorsFilter, Color };
