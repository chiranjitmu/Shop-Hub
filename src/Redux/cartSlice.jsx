import { createSlice } from "@reduxjs/toolkit";

const initialCartData = JSON.parse(localStorage.getItem("cart_data")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartData,
  reducers: {
    addcart: (state, action) => {
      const existingItem = state.find(
        (item) => item.productTitle === action.payload.productTitle
      );

      if (!existingItem) {
        state.push(action.payload);
        localStorage.setItem("cart_data", JSON.stringify(state));
      }
    },
    updateCountplus: (state, action) => {
      if (state[action.payload]) {
        state[action.payload].productCount += 1;
        localStorage.setItem("cart_data", JSON.stringify(state));
      }
    },
    updateCountminus: (state, action) => {
      if (state[action.payload]) {
        state[action.payload].productCount -= 1;
        localStorage.setItem("cart_data", JSON.stringify(state));
      }
    },
    deleteCart: (state, action) => {
      state = state.filter((cart, index) => index !== action.payload);
      localStorage.setItem("cart_data", JSON.stringify(state));
      return state;
    },
  },
});

export const { addcart, deleteCart, updateCountplus, updateCountminus } = cartSlice.actions;
export default cartSlice.reducer;
