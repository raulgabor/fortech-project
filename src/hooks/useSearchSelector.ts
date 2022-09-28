import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useSearchBookSelector = () => {
  const searchBook = useSelector((state: RootState) => state.books.search);
  return searchBook;
};
