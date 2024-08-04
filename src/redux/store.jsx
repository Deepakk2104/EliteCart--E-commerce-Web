import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});

export default store;
