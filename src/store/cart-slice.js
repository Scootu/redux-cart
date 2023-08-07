import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceItems(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addCartToItems(state, actions) {
      const newItem = actions.payload;
      //   const existingItemIndex = state.items.findIndex((item) => {
      //     return item.id === newItem.id;
      //   });
      //   const existingItem = state.items[existingItemIndex];

      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      state.changed = true;
      state.totalQuantity += 1;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        // state.items[existingItemIndex] = existingItem;
      }
    },
    removeCartFromItems(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === id;
      });
      state.changed = true;
      state.totalQuantity -= 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== id;
        });
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
