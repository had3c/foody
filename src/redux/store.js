import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice/basketSlice.jsx";

const store = configureStore({
  reducer: {
    basket: basketReducer
  },

export default store;

