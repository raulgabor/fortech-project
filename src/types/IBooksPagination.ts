import { IBook } from "./IBook";

export interface IBooksPagination {
  cursor: unknown;
  items: IBook[];
  next_page: unknown;
}
