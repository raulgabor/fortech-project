import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IBook } from "../types/IBook";

const useFilteredBooksSelector = () => {
  const books = useSelector((state: RootState) =>
    state.books.books.filter((book: IBook) =>
      book.title.toLowerCase().includes(state.books.search.toLowerCase())
    )
  );
  return books as IBook[];
};

export default useFilteredBooksSelector;
