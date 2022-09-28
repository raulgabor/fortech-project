import React, { useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import {
  Grid,
  Center,
  Loader,
  Text,
  Modal,
  Group,
  Button,
} from "@mantine/core";
import BookCard from "./components/BookCard";
import CreateBook from "./components/CreateBook/CreateBook";
import SearchBook from "./components/SearchBook/SearchBook";
import useFilteredBooksSelector from "../../hooks/useFilteredBooksSelector";

const Books = () => {
  const [opened, setOpened] = useState(false);
  const filteredBooks = useFilteredBooksSelector();
  //const { isLoading, isError, books } = useBooks();
  const { isLoading, isError, data: books } = useBooks();

  if (isLoading) {
    return (
      <Center>
        <Loader color="blue" size="xl" variant="dots" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center>
        <Text color="red" weight="bolder" size={20}>
          An error has occurred.
        </Text>
      </Center>
    );
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add a new book"
      >
        <CreateBook />
      </Modal>
      <SearchBook />
      <Group position="center">
        <Button mb={20} size="lg" onClick={() => setOpened(true)}>
          Add book
        </Button>
      </Group>
      <Grid gutter="xl">
        {books &&
          filteredBooks.map((book) => (
            <Grid.Col sm={6} md={4} key={book._uuid}>
              <BookCard book={book} />
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
};

export default Books;
