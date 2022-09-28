import { IBook } from "../../../types/IBook";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Image,
  Text,
  Button,
  Center,
  Progress,
  Indicator,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const percentageNumber = (book.currentPage / book.pages) * 100;
  const percentageValue = percentageNumber.toFixed(2);

  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(`/books/${book._uuid}`);
  };

  return (
    <Indicator
      offset={12}
      size={50}
      color="green"
      disabled={!(Number(percentageValue) === 100.0)}
      label={<IconCircleCheck />}
    >
      <Card
        shadow="md"
        radius="md"
        withBorder
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[0],
        })}
      >
        <Card.Section>
          <Center>
            <Image
              p="sm"
              width="auto"
              height="50vh"
              src={book.imageLink}
              alt="Book Image"
            />
          </Center>
        </Card.Section>
        <Center>
          <div
            style={{
              textAlign: "center",
              padding: "4vh",
            }}
          >
            <Text size="xl" weight="bolder">
              {book.title}
            </Text>
            <Text size="md" weight="bold">
              Author: {book.author}
            </Text>
            <Text size="md">Pages: {book.pages}</Text>
            <Button mt={16} onClick={redirectHandler}>
              Book information
            </Button>
          </div>
        </Center>
        <Card.Section>
          <Progress value={Number(percentageValue)} size="md" radius={0} />
        </Card.Section>
      </Card>
    </Indicator>
  );
};

export default BookCard;
