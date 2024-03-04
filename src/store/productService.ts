import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product, RootState } from "./interfaces";

export const fetchProducts = createAsyncThunk<
  Product[],
  void, // No payload for fetchProducts
  { state: RootState } // Optional state type for access within thunk
>("products/fetchProducts", async (_, thunkAPI) => {
  const response = await fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );

  const data = await response.json();

  return data as Product[];
});
