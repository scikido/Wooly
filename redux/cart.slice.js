import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getInitialCartState = () => {
  const cartItems = Cookies.get("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCartState(),
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      Cookies.set("cartItems", JSON.stringify(state));
    },

    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    emptyCart: (state) => {
      state = [];
      Cookies.remove("cartItems");
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
