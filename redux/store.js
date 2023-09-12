import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

const reducer = {
  cart: cartReducer,
};

export const store = configureStore({
  reducer,
});
