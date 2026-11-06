import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const item = state.items.find((plant) => plant.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity(state, action) {
      const item = state.items.find((plant) => plant.id === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (plant) => plant.id !== action.payload
        );
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter(
        (plant) => plant.id !== action.payload
      );
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;