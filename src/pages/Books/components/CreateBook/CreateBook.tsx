import React /*{ useState }*/ from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBook } from "../../../../hooks/useCreateBook";
import { Text, TextInput, Button, Title } from "@mantine/core";

const createBookSchema = z.object({
  title: z.string().min(2, "The title is too short"),
  author: z.string().min(2, "The author's name is too short"),
  pages: z.string().refine((value) => Number(value) > 0, {
    message: "The book can't have zero or negative pages!",
  }),
  imageLink: z
    .string()
    .url({ message: "The URL is invalid. Please try again!" }),
  currentPage: z.string().refine((value) => Number(value) >= 0, {
    message: "The current page can't be negative!",
  }),
  review: z.string(),
});

type CreateBookFormFields = z.infer<typeof createBookSchema>;

const CreateBook = () => {
  /*const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [imageLink, setImageLink] = useState("");*/

  const { register, handleSubmit, reset, formState } =
    useForm<CreateBookFormFields>({
      defaultValues: {
        title: "",
        author: "",
        imageLink: "",
        pages: "",
        currentPage: "",
        review: "",
      },
      mode: "onBlur",
      resolver: zodResolver(createBookSchema),
    });

  //const { isError, isLoading, createBook, book } = useCreateBook();

  const { isLoading, mutate: createBook, data: book } = useCreateBook();

  const onSubmit = async (values: CreateBookFormFields) => {
    const { pages, currentPage, ...rest } = values;
    await createBook(
      {
        pages: Number(pages),
        currentPage: Number(currentPage),
        ...rest,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  /*const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createBook({
      title,
      author,
      imageLink,
      pages,
    });
    setTitle("");
    setAuthor("");
    setImageLink("");
    setPages(0);
  };*/

  return (
    <>
      {book && (
        <Title order={4} pb="sm">
          You added
          <Text color="green" inherit component="span" mr="xs" ml="xs">
            {book.items[0].title}
          </Text>
          to your tracker!
        </Title>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          mb="sm"
          placeholder="Title"
          label="Title"
          withAsterisk
          error={formState.errors?.title?.message}
          {...register("title")}
        />
        <TextInput
          mb="sm"
          placeholder="Author"
          label="Author"
          withAsterisk
          error={formState.errors?.author?.message}
          {...register("author")}
        />
        <TextInput
          mb="sm"
          placeholder="Image Link"
          label="Image"
          withAsterisk
          error={formState.errors?.imageLink?.message}
          {...register("imageLink")}
        />
        <TextInput
          mb="sm"
          type="number"
          placeholder="Pages"
          label="Pages"
          withAsterisk
          error={formState.errors?.pages?.message}
          {...register("pages")}
        />
        <Button loading={isLoading} type="submit" mt={20}>
          Add to tracker
        </Button>
      </form>
    </>
  );

  /*return (
    <>
      {book && <Text>You added {book.title} to your tracker!</Text>}
      <form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          label="Title"
          value={title}
          withAsterisk
        />
        <TextInput
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          label="Author"
          value={author}
          withAsterisk
        />
        <TextInput
          onChange={(e) => setImageLink(e.target.value)}
          placeholder="Image Link"
          label="Image"
          value={imageLink}
          withAsterisk
        />
        <TextInput
          onChange={(e) => setPages(Number(e.target.value))}
          type="number"
          placeholder="Pages"
          label="Pages"
          value={pages}
          withAsterisk
        />
        <Button loading={isLoading} type="submit" mt={20}>
          Add to tracker
        </Button>
      </form>
    </>
  );*/
};

export default CreateBook;
