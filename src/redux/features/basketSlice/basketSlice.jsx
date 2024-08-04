import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
          state.products = state.products.filter(p => p.id !== id);
        }
      }
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
