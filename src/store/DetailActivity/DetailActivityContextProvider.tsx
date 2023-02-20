import React, { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TypeDetailActivityResponseAPI,
  TypeDetailActivitys,
} from "../../types/DetailActivity/detailActivityType";
import DetailActivityContext from "./detailActivityContext";

const DetailActivityContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { id } = useParams();
  const [detailActivitys, setDetailActivitys] = useState<TypeDetailActivitys>(
    [],
  );
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isPost, setIsPost] = useState<boolean>(false);

  useEffect(() => {
    const getDetailActivitys = async () => {
      const response = await fetch(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`,
      );
      const responseJson: TypeDetailActivityResponseAPI = await response.json();
      setDetailActivitys(responseJson.data);
    };
    getDetailActivitys();
  }, [isPost, isDelete, id]);
  const addDetailActivityDefaultValue = async () => {
    await fetch("https://todo.api.devcode.gethired.id/todo-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "activity",
        activity_group_id: Number(id),
        is_active: true,
      }),
    });
    setIsPost(!isPost);
  };
  const addDetailActivity = async (data: {
    priority: string;
    title: string;
  }) => {
    const detailActivity: {
      activity_group_id: number;
      is_active: boolean;
      priority: string;
      title: string;
    } = {
      ...data,
      activity_group_id: Number(id),
      is_active: true,
    };
    await fetch("https://todo.api.devcode.gethired.id/todo-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detailActivity),
    });
    setIsPost(!isPost);
  };
  const deleteDetailActivity = async (idDetailActivity: number) => {
    await fetch(
      `https://todo.api.devcode.gethired.id/todo-items/${idDetailActivity}`,
      {
        method: "DELETE",
      },
    );
    setIsDelete(!isDelete);
  };
  const editDetailActivity = async (
    data: {
      priority: string;
      title: string;
    },
    idDetailActivity: number,
  ) => {
    await fetch(
      `https://todo.api.devcode.gethired.id/todo-items/${idDetailActivity}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      },
    );
    setIsPost(!isPost);
  };
  return (
    <DetailActivityContext.Provider
      value={{
        detailActivitys,
        addDetailActivityDefaultValue,
        addDetailActivity,
        deleteDetailActivity,
        editDetailActivity,
      }}
    >
      {children}
    </DetailActivityContext.Provider>
  );
};

export default DetailActivityContextProvider;
