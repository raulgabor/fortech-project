import axios from "axios";
import { IBooksPagination } from "../types/IBooksPagination";
import { IBook } from "../types/IBook";
import { ICreateBook } from "../types/ICreateBook";
import { IUpdateBook } from "../types/IUpdateBook";
import { IDeleteBook } from "../types/IDeleteBook";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5004",
});

export const getBooks = async () => {
  const { data } = await axiosInstance.get<IBooksPagination>("/books");
  return data.items;
};

export const getBook = async (uuid: string) => {
  const { data } = await axiosInstance.get<IBook>(`/books/${uuid}`);
  return data;
};

export const postBook = async (request: ICreateBook) => {
  const { data } = await axiosInstance.post<{ items: IBook[] }>("/books", [
    request,
  ]);
  return data;
};

export const putBook = async (request: IUpdateBook) => {
  const { uuid, ...rest } = request;
  const { data } = await axiosInstance.put<IBook>(`/books/${uuid}`, rest);
  return data;
};

export const deleteBook = async (request: IDeleteBook) => {
  const { uuid } = request;
  const { data } = await axiosInstance.delete<IBook>(`/books/${uuid}`);
  return data;
};
