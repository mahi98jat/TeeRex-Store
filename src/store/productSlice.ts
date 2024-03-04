import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./initalStates";
import { fetchProducts } from "./productService";

const initialState: RootState = {
  products: [],
  isLoading: false,
  filteredProducts: [],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    filterProducts: (state, action: any) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice;
