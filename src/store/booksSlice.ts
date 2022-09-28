import { createSlice } from "@reduxjs/toolkit";

const initialBookState = {
  books: [],
  search: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBookState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
