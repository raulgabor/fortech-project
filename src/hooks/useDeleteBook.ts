import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../service/bookService";
import { keyBuilder } from "../keyBuilder";

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteBook, {
    onSuccess: (book) => {
      queryClient.invalidateQueries(keyBuilder.book(book._uuid));
    },
  });
};
