import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Button,
  Group,
  Anchor,
  Space,
  PasswordInput,
  MediaQuery,
} from "@mantine/core";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const createRegisterSchema = z.object({
  lastName: z.string().min(2, "Name is too short!"),
  firstName: z.string().min(2, "Name is too short!"),
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string()
    .regex(
      /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]+)(?=.*[0-9]+)(?=.*[a-z]+).{8,}$/,
      "The password must be at least 8 letters long, with an uppercase, a lowercase, and a special character and must contain a digit!"
    ),
});

type RegisterFields = z.infer<typeof createRegisterSchema>;

const Register = () => {
  const [opened, setOpened] = useState(true);
  const [loggedOn, setLoggedOn] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<RegisterFields>({
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(createRegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterFields> = (data) => {
    dispatch(authActions.login());
    setOpened(false);
    setLoggedOn(true);
    console.log(data);
  };

  return (
    <>
      {loggedOn ? <Navigate to="/books" /> : null}
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
        title="Are you a new user? Register here so you can keep track of your reading!"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            mt={10}
            placeholder="Your Last Name"
            label="Last Name"
            type="text"
            withAsterisk
            error={formState.errors?.lastName?.message}
            {...register("lastName")}
          />
          <TextInput
            type="text"
            mt={10}
            placeholder="Your First Name"
            label="First Name"
            withAsterisk
            error={formState.errors?.firstName?.message}
            {...register("firstName")}
          />
          <TextInput
            mt={10}
            placeholder="Your E-mail"
            label="E-mail"
            type="email"
            withAsterisk
            error={formState.errors?.email?.message}
            {...register("email")}
          />
          <PasswordInput
            mt={10}
            placeholder="Your Password"
            label="Password"
            withAsterisk
            error={formState.errors?.password?.message}
            {...register("password")}
          />
          <Group position="left">
            <MediaQuery
              query="(max-width: 425px)"
              styles={{ marginBottom: "40px", marginTop: "10px" }}
            >
              <Anchor
                size={14}
                color="dimmed"
                mt={30}
                component={Link}
                to="/login"
              >
                Already have an account? Log in
              </Anchor>
            </MediaQuery>
          </Group>
          <Group position="right">
            <Button mt={-25} type="submit" disabled={!formState.isValid}>
              Register
            </Button>
          </Group>
          <Button
            component={Link}
            to="/"
            title="Back to Home"
            variant="subtle"
            p={0}
          >
            ←<Space w="sm" /> Back to Homepage
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Register;
