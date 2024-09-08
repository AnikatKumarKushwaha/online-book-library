import { createSlice } from "@reduxjs/toolkit";
import { DummyData } from "../DummyData";

const bookSlice = createSlice({
  name: "books",
  initialState: DummyData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
