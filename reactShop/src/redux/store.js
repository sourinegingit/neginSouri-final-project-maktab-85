import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart-slice";

const store = configureStore({
  reducer: { products: cartSlice },
});

export default store;
