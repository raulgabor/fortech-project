/*import { useEffect, useState } from "react";
import { IBook } from "../types/IBook";*/
import { getBooks } from "../service/bookService";
import { useQuery } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { useDispatch } from "react-redux";
import { booksActions } from "../store/booksSlice";

export const useBooks = () => {
  const dispatch = useDispatch();
  return useQuery(keyBuilder.books(), getBooks, {
    onSuccess: (data) => dispatch(booksActions.setBooks(data)),
  });
  /* const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return {
    books,
    isLoading,
    isError,
  };*/
};
