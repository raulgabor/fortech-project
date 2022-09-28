import {
  Box,
  Button,
  Divider,
  Group,
  MediaQuery,
  Space,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createContactSchema = z.object({
  name: z.string().min(3, "The name is too short"),
  email: z.string().email({ message: "Invalid email" }),
  messageText: z
    .string()
    .min(50, "The message must be at least 50 characters long!"),
});

type ContactFormFields = z.infer<typeof createContactSchema>;

const Contact = () => {
  const theme = useMantineTheme();
  const { register, reset, handleSubmit, formState } =
    useForm<ContactFormFields>({
      defaultValues: {
        name: "",
        email: "",
        messageText: "",
      },
      mode: "onBlur",
      resolver: zodResolver(createContactSchema),
    });

  const onSubmit: SubmitHandler<ContactFormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Group position="left" pl={20} pt={20}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MediaQuery
            query="(max-width: 1330px)"
            styles={{
              marginLeft: "80vh",
              marginBottom: "10vh",
            }}
          >
            <div>
              <Title order={3} weight="bolder">
                You can reach us via:
              </Title>
              <Text ml="xs" style={{ display: "flex" }} size={20} pt={20}>
                <Text weight="bold">Telephone:</Text>
                <Space w="xs" />
                +40
                <Space w="xs" />
                <Text>200</Text>
                <Space w="xs" />
                <Text>000</Text>
                <Space w="xs" />
                <Text>000</Text>
              </Text>
              <Group>
                <Text ml="xs" style={{ display: "flex" }} size={20} pt="sm">
                  <Text weight="bold">Fax:</Text>
                  <Space w="xs" />
                  +40
                  <Space w="xs" />
                  <Text>211</Text>
                  <Space w="xs" />
                  <Text>111</Text>
                  <Space w="xs" />
                  <Text>111</Text>
                </Text>
              </Group>
              <Group>
                <Text ml="xs" size={20} pt="sm">
                  <Text weight="bold">Address:</Text>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text>X Street 400000</Text>
                    <Text>Y County</Text>
                    <Text>Z Country</Text>
                  </div>
                </Text>
              </Group>
            </div>
          </MediaQuery>
        </div>
      </Group>
      <Group position="right" mt={-200}>
        <MediaQuery
          query="(max-width: 1330px)"
          styles={{
            display: "none",
          }}
        >
          <Divider
            orientation="vertical"
            color={theme.colors.dark[3]}
            pr={30}
          />
        </MediaQuery>
        <div>
          <MediaQuery
            query="(max-width: 1330px)"
            styles={{ marginTop: "25vh", marginRight: "25vh" }}
          >
            <Box
              sx={(theme) => ({
                display: "block",
                width: "55rem",
                marginRight: "2rem",
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[0],
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[7]
                      : theme.colors.gray[1],
                },
              })}
            >
              <Text align="center" size={20} mb={30} weight={700}>
                Do you have questions or ideas on how to improve our services?
                You can contact us by filling in the form below and we'll be in
                touch as soon as possible.
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  type="text"
                  mt={10}
                  placeholder="Name"
                  label="Full name"
                  withAsterisk
                  error={formState.errors?.name?.message}
                  {...register("name")}
                />
                <TextInput
                  type="email"
                  mt={10}
                  placeholder="E-mail"
                  label="E-mail"
                  withAsterisk
                  error={formState.errors?.email?.message}
                  {...register("email")}
                />
                <Textarea
                  minRows={2}
                  autosize
                  maxRows={4}
                  mt={10}
                  placeholder="Your message"
                  label="Message"
                  withAsterisk
                  error={formState.errors?.messageText?.message}
                  {...register("messageText")}
                />
                <Button mt={25} type="submit" disabled={!formState.isValid}>
                  Send
                </Button>
              </form>
            </Box>
          </MediaQuery>
        </div>
      </Group>
    </>
  );
};

export default Contact;
