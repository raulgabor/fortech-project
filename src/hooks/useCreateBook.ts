//import { IBook } from "../types/IBook";
//import { useCallback, useState } from "react";
//import { ICreateBook } from "../types/ICreateBook";
import { postBook } from "../service/bookService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  return useMutation(postBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyBuilder.books());
    },
  });
  /*const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [book, setBook] = useState<IBook>();
  const createBook = useCallback(async (request: ICreateBook) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await postBook(request);
      setBook(data.items[0]);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    createBook,
    book,
  };*/
};
