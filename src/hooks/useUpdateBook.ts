import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putBook } from "../service/bookService";
import { keyBuilder } from "../keyBuilder";

export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  return useMutation(putBook, {
    onSuccess: (book) => {
      queryClient.invalidateQueries(keyBuilder.book(book._uuid));
    },
  });
};
