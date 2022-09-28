import React, { useState } from "react";
import { Button, Center, TextInput } from "@mantine/core";
import { useDispatch } from "react-redux";
import {
  increaseByValue,
  decreaseByValue,
} from "../store/pagesCounterActionCreators";

const PagesCounter = () => {
  const dispatch = useDispatch();
  const [pageValue, setPageValue] = useState(0);

  const increasePagesHandler = () => {
    dispatch(increaseByValue(pageValue));
  };

  const decreasePagesHandler = () => {
    dispatch(decreaseByValue(pageValue));
  };

  return (
    <Center mt={-34}>
      <>
        <Button
          mr="sm"
          sx={{
            backgroundColor: "#008040",
            "&:hover": { backgroundColor: "rgba(0,128,64,0.73)" },
          }}
          onClick={increasePagesHandler}
        >
          Add Pages
        </Button>
        <TextInput
          sx={{ width: "10vh" }}
          styles={{
            input: {
              backgroundColor: "rgba(255,255,255,0.77)",
              color: "#1a1b1e",
            },
          }}
          value={pageValue}
          onChange={(event) => setPageValue(Number(event.target.value))}
        />
        <Button
          ml="sm"
          sx={{
            backgroundColor: "#b30000",
            "&:hover": { backgroundColor: "rgba(179,0,0,0.76)" },
          }}
          onClick={decreasePagesHandler}
        >
          Subtract Pages
        </Button>
      </>
    </Center>
  );
};

export default PagesCounter;
