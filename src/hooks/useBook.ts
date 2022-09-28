/*import { useEffect, useState } from "react";
import { IBook } from "../types/IBook";*/
import { getBook } from "../service/bookService";
import { useQuery } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";

export const useBook = (uuid: string) => {
  return useQuery(keyBuilder.book(uuid), () => getBook(uuid));
  /* const [book, setBook] = useState<IBook>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getBook(uuid);
        setBook(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [uuid]);

  return {
    book,
    isLoading,
    isError,
  };*/
};
