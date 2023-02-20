import { TypeDetailActivity } from "../DetailActivity/detailActivityType";

export type TypeActivity = {
  id: number;
  title: string;
  created_at: string;
};

export type TypeActivitys = Array<TypeActivity>;

export type TypeActivitysResponseAPI = {
  data: TypeActivitys;
};
export type TypeActivityResponseAPI = TypeActivity & {
  todo_items: Array<TypeDetailActivity>;
};
