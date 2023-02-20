import { createContext } from "react";
import { TypeDetailActivitys } from "../../types/DetailActivity/detailActivityType";

type TypeDetailActivityContext = {
  detailActivitys: TypeDetailActivitys;
  addDetailActivityDefaultValue: () => Promise<void>;
  addDetailActivity: (data: {
    priority: string;
    title: string;
  }) => Promise<void>;
  deleteDetailActivity: (idDetailActivity: number) => Promise<void>;
  editDetailActivity: (
    data: {
      priority: string;
      title: string;
    },
    idDetailActivity: number,
  ) => Promise<void>;
};
const DetailActivityContext = createContext<TypeDetailActivityContext>(
  {} as TypeDetailActivityContext,
);

export default DetailActivityContext;
