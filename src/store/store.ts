import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
