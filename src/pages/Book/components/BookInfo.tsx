import React, { useState } from "react";
import { IBook } from "../../../types/IBook";
import {
  Card,
  Image,
  Text,
  Center,
  Progress,
  Textarea,
  Button,
  MediaQuery,
} from "@mantine/core";
import { useUpdateBook } from "../../../hooks/useUpdateBook";
//import {usePagesCountSelector} from "../../../hooks/usePagesCountSelector";

interface BookInfoProps {
  book: IBook;
}

const BookInfo = ({ book }: BookInfoProps) => {
  // const pageCurrent = usePagesCountSelector();
  const [opened, setOpened] = useState(true);
  const [review, setReview] = useState(book.review);
  const percentageNumber = (book.currentPage / book.pages) * 100;
  const percentageValue = percentageNumber.toFixed(2);
  const { mutate } = useUpdateBook();

  const reviewHandler = () => {
    mutate({ uuid: book._uuid, review });
    setOpened((prevState) => !prevState);
  };

  return (
    <Center>
      <Card shadow="md" radius="md" style={{ width: "100%" }}>
        <Card.Section>
          <Progress
            value={Number(percentageValue)}
            size={20}
            radius={0}
            label={percentageValue + "%"}
            color="indigo"
          />
        </Card.Section>
        {Number(percentageValue) === 100.0 && (
          <Card.Section mt="sm">
            <Center>
              <Text color="green" weight="bolder" size={20}>
                Congrats!!! You're through with the book! Record down below your
                review / summary to remember the most important things from it.
              </Text>
            </Center>
          </Card.Section>
        )}
        <Center>
          <Card.Section>
            <Image
              p="sm"
              src={book.imageLink}
              height="55vh"
              width="auto"
              alt="Book Image"
            />
          </Card.Section>
        </Center>
        <Center p="sm">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Text size={36} weight="bolder" pb="sm" pt="sm">
              {book.title}
            </Text>
            <Text size="md" weight="bold" pb="sm">
              Author: {book.author}
            </Text>
            <Text size="md">
              Pages read: {book.currentPage} / {book.pages}
            </Text>
          </div>
        </Center>

        {Number(percentageValue) === 100.0 && (
          <Card.Section mb="sm">
            <Center sx={{ display: "flex", flexDirection: "column" }}>
              <MediaQuery query="(max-width: 702px)" styles={{ width: "auto" }}>
                <Textarea
                  disabled={opened}
                  sx={{ width: "100vh" }}
                  styles={{
                    input: {
                      backgroundColor: "rgba(255,255,255,0.77)",
                      color: "#1a1b1e",
                    },
                  }}
                  mb="sm"
                  minRows={2}
                  autosize
                  maxRows={4}
                  mt={10}
                  placeholder="Your review/summary"
                  label="Here you can write a more detailed review"
                  defaultValue={book.review}
                  onChange={(event) => setReview(event.target.value)}
                />
              </MediaQuery>
              <Button onClick={reviewHandler} mb="sm">
                {opened ? "Edit Review" : "Save Changes"}
              </Button>
            </Center>
          </Card.Section>
        )}
      </Card>
    </Center>
  );
};

export default BookInfo;
