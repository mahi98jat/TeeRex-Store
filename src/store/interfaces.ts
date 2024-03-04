export interface RootState {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  imageURL: string;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
  price: number;
}
