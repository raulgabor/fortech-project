import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useBook } from "../../hooks/useBook";
import { Center, Loader, Text, Button, MediaQuery } from "@mantine/core";
import BookInfo from "./components/BookInfo";
import UpdateBook from "./components/UpdateBook";
import DeleteBook from "./components/DeleteBook";
import CurrentPageBook from "./components/CurrentPageBook";
//import PagesCounter from "../../components/PagesCounter";

const Book = () => {
  const { uuid } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const { isError, isLoading, data: book } = useBook(uuid || "");

  if (isLoading || !book) {
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
      <BookInfo book={book} />
      <div>
        <MediaQuery
          query="(max-width: 550px)"
          styles={{ marginBottom: "auto" }}
        >
          <Button mt={20} onClick={() => setIsOpen((prevState) => !prevState)}>
            {isOpen ? "Close update fields" : "Update book info"}
          </Button>
        </MediaQuery>
        <CurrentPageBook book={book} />
        {/*<PagesCounter />*/}
        <MediaQuery
          query="(max-width: 550px)"
          styles={{ marginBottom: "auto" }}
        >
          <DeleteBook book={book} />
        </MediaQuery>
        {isOpen && <UpdateBook book={book} />}
      </div>
    </>
  );
};

export default Book;
