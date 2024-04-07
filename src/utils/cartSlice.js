import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
/** createSlice returns an object,
 * where all the methods defined inside reducers are stored inside actions property
 * reducer property store the state and action
 */
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
