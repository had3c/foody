import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  langName: "en",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLangName: (state, action) => {
      state.langName = action.payload;
    },
  },
});

export const { setLangName } = langSlice.actions;

export default langSlice.reducer;
