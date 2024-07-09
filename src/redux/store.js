import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./features/langSlice/langSlice";

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export default store;
