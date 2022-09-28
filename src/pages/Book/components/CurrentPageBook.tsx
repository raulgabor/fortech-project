import React, { useState } from "react";
import { Button, NumberInput, Center, MediaQuery } from "@mantine/core";
import { IBook } from "../../../types/IBook";
import { useUpdateBook } from "../../../hooks/useUpdateBook";

interface CurrentPageBookProps {
  book: IBook;
}

const CurrentPageBook = ({ book }: CurrentPageBookProps) => {
  const [currentPage, setCurrentPage] = useState(book.currentPage);

  const { mutate } = useUpdateBook();

  const currentPageBookHandler = () => {
    if (currentPage > book.pages) return;
    if (currentPage < 0) return;
    return mutate({ uuid: book._uuid, currentPage });
  };

  return (
    <div>
      <MediaQuery
        query="(max-width: 550px)"
        styles={{
          marginTop: "50px",
        }}
      >
        <div>
          <Center mt={-34}>
            <Button
              type="submit"
              mr="sm"
              sx={{
                backgroundColor: "#008040",
                "&:hover": { backgroundColor: "rgba(0,128,64,0.73)" },
              }}
              onClick={currentPageBookHandler}
            >
              Add Pages
            </Button>
            <NumberInput
              placeholder="0"
              sx={{ width: "10vh" }}
              styles={{
                input: {
                  backgroundColor: "rgba(255,255,255,0.77)",
                  color: "#1a1b1e",
                },
              }}
              hideControls
              onChange={(event: number) => setCurrentPage(event)}
            />
          </Center>
        </div>
      </MediaQuery>
    </div>
  );
};

export default CurrentPageBook;
