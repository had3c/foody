import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./features/langSlice/langSlice";
import basketReducer from "./features/basketSlice/basketSlice.jsx";

const store = configureStore({
  reducer: {
    lang: langReducer,
    basket: basketReducer
  },
});

export default store;

