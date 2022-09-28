import React from "react";
import { Autocomplete, Group } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useSearchBookSelector } from "../../../../hooks/useSearchSelector";
import { useDispatch } from "react-redux";
import { booksActions } from "../../../../store/booksSlice";
import useFilteredBooksSelector from "../../../../hooks/useFilteredBooksSelector";

const SearchBook = () => {
  const searchBook = useSearchBookSelector();
  const filteredBooks = useFilteredBooksSelector();
  const dispatch = useDispatch();

  return (
    <Group position="left" ml="md">
      <Autocomplete
        mb="sm"
        placeholder="Search for a book"
        sx={{ width: "50vh" }}
        icon={<IconSearch size={18} color="#1a1b1e" />}
        styles={{
          input: {
            backgroundColor: "rgba(255,255,255,0.77)",
            color: "#1a1b1e",
          },
        }}
        data={filteredBooks.map((item) => {
          return { value: item.title };
        })}
        value={searchBook}
        onChange={(event) => dispatch(booksActions.setSearch(event))}
        nothingFound="Not found!"
        limit={3}
      />
    </Group>
  );
};

export default SearchBook;
