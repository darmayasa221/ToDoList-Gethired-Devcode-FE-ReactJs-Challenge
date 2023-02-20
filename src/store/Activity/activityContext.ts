import { createContext } from "react";
import {
  TypeActivity,
  TypeActivitys,
} from "../../types/Activitys/activitysType";

type TypeActivityContext = {
  activity: TypeActivity;
  activitys: TypeActivitys;
  addActivity: () => void;
  deleteActivity: (id: number) => Promise<void>;
  updateActivity: ({
    title,
    activityId,
  }: {
    title: string;
    activityId: number;
  }) => Promise<void>;
  isDeleteSuccess: boolean;
};
const ActivityContext = createContext<TypeActivityContext>(
  {} as TypeActivityContext,
);

export default ActivityContext;
