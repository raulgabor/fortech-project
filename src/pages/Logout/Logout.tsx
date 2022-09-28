import React, { useState } from "react";
import { Modal, Button } from "@mantine/core";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Logout = () => {
  const [opened, setOpened] = useState(true);
  const dispatch = useDispatch();
  const [loggedOut, setLoggedOut] = useState(false);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    setOpened(false);
    setLoggedOut(true);
  };

  return (
    <>
      {loggedOut ? <Navigate to="/" /> : null}
      <Modal
        size="lg"
        centered
        overlayBlur={1.5}
        overlayOpacity={0}
        radius="md"
        withCloseButton={false}
        closeOnEscape={false}
        closeOnClickOutside={false}
        opened={opened}
        onClose={() => setOpened(false)}
        title="Are you sure you want to logout?"
      >
        <Button onClick={logoutHandler}>Logout</Button>
        <Button ml={10} variant="outline" component={Link} to="/books">
          Cancel
        </Button>
      </Modal>
    </>
  );
};

export default Logout;
