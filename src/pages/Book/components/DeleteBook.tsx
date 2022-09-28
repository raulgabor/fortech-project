import React, { useState } from "react";
import { IBook } from "../../../types/IBook";
import { useDeleteBook } from "../../../hooks/useDeleteBook";
import { Button, Group, MediaQuery, Modal } from "@mantine/core";
import { Link } from "react-router-dom";

interface DeleteBookProps {
  book: IBook;
}

const DeleteBook = ({ book }: DeleteBookProps) => {
  const { isLoading, mutate } = useDeleteBook();
  const [opened, setOpened] = useState(false);

  const deleteHandler = () => {
    mutate({ uuid: book._uuid });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Are you sure you want to delete the book from dashboard?"
      >
        <Button
          type="button"
          loading={isLoading}
          onClick={deleteHandler}
          color="red"
          component={Link}
          to="/books"
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            setOpened(false);
          }}
          ml={10}
          variant="outline"
          component={Link}
          to={`/books/${book._uuid}`}
        >
          Cancel
        </Button>
      </Modal>
      <Group position="right">
        <MediaQuery
          query="(max-width: 550px)"
          styles={{
            marginTop: "-140px",
          }}
        >
          <Button
            onClick={() => setOpened(true)}
            color="red"
            variant="outline"
            mt={-34}
            style={{ position: "absolute" }}
          >
            Delete book
          </Button>
        </MediaQuery>
      </Group>
    </>
  );
};

export default DeleteBook;
