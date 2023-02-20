export type TypeDetailActivity = {
  activity_group_id: number;
  id: string;
  is_active: number;
  priority: string;
  title: string;
};

export type TypeDetailActivitys = Array<TypeDetailActivity>;
export type TypeDetailActivityResponseAPI = {
  data: TypeDetailActivitys;
};
