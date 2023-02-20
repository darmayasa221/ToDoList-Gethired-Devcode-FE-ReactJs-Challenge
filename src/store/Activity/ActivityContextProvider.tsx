import React, { FC, ReactNode, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TypeActivity,
  TypeActivityResponseAPI,
  TypeActivitys,
  TypeActivitysResponseAPI,
} from "../../types/Activitys/activitysType";
import ActivtyContext from "./activityContext";

const ActivityContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const params = useParams();
  const [activitys, setActivits] = useState<TypeActivitys>([]);
  const [activity, setActivity] = useState<TypeActivity>({} as TypeActivity);
  const [isPost, setIsPost] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isActivityNeeded, setIsActivityNeeded] = useState<boolean>(false);
  useEffect(() => {
    setIsActivityNeeded(Object.keys(params)[0] === "id");
  }, [params]);
  useEffect(() => {
    const getActivity = async () => {
      const response = await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/${params.id}`,
      );
      const { created_at, id, title }: TypeActivityResponseAPI =
        await response.json();
      setActivity((prev) => ({ ...prev, created_at, id, title }));
    };
    if (isActivityNeeded) getActivity();
    return () => {
      setIsActivityNeeded(false);
    };
  }, [isActivityNeeded, params.id]);
  useEffect(() => {
    const getActivitys = async () => {
      const response = await fetch(
        "https://todo.api.devcode.gethired.id/activity-groups/?email=test@email.com",
      );
      const responseJson: TypeActivitysResponseAPI = await response.json();
      setActivits(responseJson.data);
    };
    getActivitys();
    return () => setIsUpdate(false);
  }, [isPost, isDelete, isUpdate]);
  const addActivity = async () => {
    await fetch("https://todo.api.devcode.gethired.id/activity-groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Activity",
        email: "test@email.com",
      }),
    });
    setIsPost(!isPost);
  };
  const deleteActivity = async (id: number) => {
    await fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}`, {
      method: "DELETE",
    });
    setIsDelete(!isDelete);
  };
  const updateActivity = async ({
    title,
    activityId,
  }: {
    title: string;
    activityId: number;
  }) => {
    await fetch(
      `https://todo.api.devcode.gethired.id/activity-groups/${activityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      },
    );
    setIsUpdate(true);
  };
  return (
    <ActivtyContext.Provider
      value={{
        activity,
        activitys,
        addActivity,
        deleteActivity,
        updateActivity,
      }}
    >
      {children}
    </ActivtyContext.Provider>
  );
};

export default ActivityContextProvider;
