import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import ConfirmAlert from "../../components/Alert/ConfirmAlert";
import InformAlert from "../../components/Alert/InformAlert";
import HeaderActivity from "../../components/Main/Dashboard/Header/HeaderActivity";
import ActivityItem from "../../components/Main/Dashboard/Main/Activity/ActivityItem";
import { EmptyActivity } from "../../components/Main/Dashboard/Main/Activity/EmptyActivity";
import Modal from "../../components/Modal/Modal";
import { mq } from "../../globalStyle/responsive";
import ActivityContext from "../../store/Activity/activityContext";
import ModalContext from "../../store/Modal/modalContext";

const Activitys = styled.div({
  display: "grid",
  paddingTop: "37px",
  gridAutoRows: "150px",
  columnGap: "20px",
  rowGap: "20px",
  gridTemplateColumns: "repeat(2, 150px)",
  [mq[0] as string]: {
    gridTemplateColumns: "repeat(3, 150px)",
  },
  [mq[1] as string]: {
    gridTemplateColumns: "repeat(4, 150px)",
  },
  [mq[2] as string]: {
    gridTemplateColumns: "repeat(3, 235px)",
    gridAutoRows: "234px",
    paddingTop: "49px",
    rowGap: "26px",
  },
  [mq[3] as string]: {
    gridTemplateColumns: "repeat(4, 235px)",
  },
});

const Activity = () => {
  const { activitys } = useContext(ActivityContext);
  const { deleteActivity } = useContext(ActivityContext);
  const [deleteActivityItem, setDeleteActivityItem] = useState<{
    id: number;
    title: string;
  }>({});
  const {
    setModalOff,
    setModalChangeChildrenElementOff,
    setModalChangeChildrenElementOn,
    isModalChangeChildrenElement,
    isModalVisible,
  } = useContext(ModalContext);
  const getDeleteActivityItem = (id: number, title: string) => {
    setDeleteActivityItem((prev) => ({ ...prev, id, title }));
    setModalChangeChildrenElementOff();
  };
  const onHandlerDeleteActivity = async () => {
    await deleteActivity(deleteActivityItem.id);
    setModalChangeChildrenElementOn();
  };
  return (
    <>
      {isModalVisible && (
        <Modal onModalOff={setModalOff}>
          {!isModalChangeChildrenElement ? (
            <ConfirmAlert
              fromItem="Activity"
              itemTitle={deleteActivityItem.title}
              onBack={setModalOff}
              onConfirm={onHandlerDeleteActivity}
            />
          ) : (
            <InformAlert fromItem="Activity" />
          )}
        </Modal>
      )}
      <HeaderActivity />
      {activitys.length === 0 ? (
        <EmptyActivity />
      ) : (
        <Activitys>
          {activitys.map(({ id, created_at, title }) => (
            <ActivityItem
              key={id}
              id={id}
              created_at={created_at}
              title={title}
              onDeleteActivityItem={getDeleteActivityItem}
            />
          ))}
        </Activitys>
      )}
    </>
  );
};

export default Activity;
