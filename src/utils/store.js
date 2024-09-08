import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slices/booksSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
