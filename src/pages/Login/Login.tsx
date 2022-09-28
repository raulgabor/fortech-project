import React, { useState } from "react";
import {
  Anchor,
  Button,
  Group,
  Modal,
  TextInput,
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

const createLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .regex(
      /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]+)(?=.*[0-9]+)(?=.*[a-z]+).{8,}$/,
      "The password must be at least 8 letters long, with an uppercase, a lowercase, and a special character and must contain a digit!"
    ),
});

type LoginFields = z.infer<typeof createLoginSchema>;

const Login = () => {
  const [opened, setOpened] = useState(true);
  const [loggedOn, setLoggedOn] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(createLoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
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
        title="So glad you're back! Please login to resume to your tracker."
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
              query="(max-width: 375px)"
              styles={{ marginBottom: "30px", marginTop: "10px" }}
            >
              <Anchor
                size={14}
                color="dimmed"
                mt={30}
                component={Link}
                to="/register"
              >
                Don't have an account? Register
              </Anchor>
            </MediaQuery>
          </Group>
          <Group position="right">
            <Button mt={-25} type="submit" disabled={!formState.isValid}>
              Login
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

export default Login;
