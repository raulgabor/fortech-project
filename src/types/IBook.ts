export interface IBook {
  _created: number;
  _data_type: string;
  _is_deleted: boolean;
  _modified: number;
  _self_link: string;
  _user: string;
  _uuid: string;
  author: string;
  pages: number;
  title: string;
  imageLink: string;
  currentPage: number;
  review: string;
}
