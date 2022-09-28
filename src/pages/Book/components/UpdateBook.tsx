import React, { useState } from "react";
import { IBook } from "../../../types/IBook";
import { useUpdateBook } from "../../../hooks/useUpdateBook";
import { TextInput, Button, Container } from "@mantine/core";

interface UpdateBookProps {
  book: IBook;
}

const UpdateBook = ({ book }: UpdateBookProps) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [imageLink, setImageLink] = useState(book.imageLink);
  const [pages, setPages] = useState(book.pages);

  const { isLoading, isError, mutate } = useUpdateBook();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ uuid: book._uuid, title, author, imageLink, pages });
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <TextInput
          styles={{
            input: {
              backgroundColor: "rgba(255,255,255,0.77)",
              color: "#1a1b1e",
            },
          }}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          label="Title"
          value={title}
          error={isError}
        />
        <TextInput
          styles={{
            input: {
              backgroundColor: "rgba(255,255,255,0.77)",
              color: "#1a1b1e",
            },
          }}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Author"
          label="Author"
          value={author}
          error={isError}
        />
        <TextInput
          styles={{
            input: {
              backgroundColor: "rgba(255,255,255,0.77)",
              color: "#1a1b1e",
            },
          }}
          onChange={(event) => setImageLink(event.target.value)}
          placeholder="Image Link"
          label="Image link"
          value={imageLink}
          error={isError}
        />
        <TextInput
          styles={{
            input: {
              backgroundColor: "rgba(255,255,255,0.77)",
              color: "#1a1b1e",
            },
          }}
          onChange={(event) => setPages(Number(event.target.value))}
          type="number"
          placeholder="Pages"
          label="Pages"
          value={pages}
          error={isError}
        />
        <Button loading={isLoading} type="submit" mt={20}>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default UpdateBook;
