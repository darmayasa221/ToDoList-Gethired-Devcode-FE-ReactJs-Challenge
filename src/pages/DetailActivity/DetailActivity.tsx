import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import ConfirmAlert from "../../components/Alert/ConfirmAlert";
import InformAlert from "../../components/Alert/InformAlert";
import FormDetailActivity from "../../components/Form/DetailActivity/FormDetailActivity";
import HeaderDetailActivity from "../../components/Main/Dashboard/Header/HeaderDetailActivity";
import DetailActivityItem from "../../components/Main/Dashboard/Main/DetailActivity/DetailActivityItem";
import EmptyDetailActivity from "../../components/Main/Dashboard/Main/DetailActivity/EmptyDetailActivity";
import Modal from "../../components/Modal/Modal";
import { mq } from "../../globalStyle/responsive";
import DetailActivityContext from "../../store/DetailActivity/detailActivityContext";
import ModalContext from "../../store/Modal/modalContext";

const DetailActivitys = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingTop: "28px",
  rowGap: "10px",
  [mq[2] as string]: {
    paddingTop: "49px",
  },
});

const DetailActivity = () => {
  const { detailActivitys, deleteDetailActivity } = useContext(
    DetailActivityContext,
  );
  const {
    isModalVisible,
    isModalChangeChildrenElement,
    setModalOff,
    setModalOn,
    setModalChangeChildrenElementOff,
    setModalChangeChildrenElementOn,
  } = useContext(ModalContext);
  const [isAddButtonClick, setIsAddButtonClick] = useState<boolean>(false);
  const [isDeleteButtonClick, setIsDeleteButtonClick] =
    useState<boolean>(false);
  const [isEditButtonClick, setIsEditButtonClick] = useState<boolean>(false);
  const [deleteDetailActivityItem, setDeleteDetailActivityItem] = useState<{
    id: number;
    title: string;
  }>({});
  const [editDetailActivityItem, setEditDetailActivityItem] = useState<{
    id: number;
    title: string;
    priority: string;
  }>({});
  const getDeleteDetailActivityItem = (data: { id: number; title: string }) => {
    setModalOn();
    setModalChangeChildrenElementOff();
    setDeleteDetailActivityItem((prev) => ({ ...prev, ...data }));
    setIsDeleteButtonClick(true);
  };
  const onHandlerDeleteDetailActivity = async () => {
    await deleteDetailActivity(deleteDetailActivityItem.id);
    setModalChangeChildrenElementOn();
  };
  const onHandlerCloseEdit = () => {
    setModalOff();
    setIsEditButtonClick(!isEditButtonClick);
  };
  const onHandlerCloseAdd = () => {
    setModalOff();
    setIsAddButtonClick(!isAddButtonClick);
  };
  const onHandlerAddButton = () => {
    setModalOn();
    setIsAddButtonClick(true);
  };
  const getEditDetailActivity = (data: {
    id: number;
    title: string;
    priority: string;
  }) => {
    setModalOn();
    setIsEditButtonClick(true);
    setEditDetailActivityItem((prev) => ({ ...prev, ...data }));
  };
  const onHandlerModalOff = () => {
    setModalOff();
    setIsAddButtonClick(false);
    setIsDeleteButtonClick(false);
  };
  return (
    <>
      {isModalVisible && (
        <Modal onModalOff={onHandlerModalOff}>
          {isDeleteButtonClick && !isModalChangeChildrenElement ? (
            <ConfirmAlert
              fromItem="item"
              itemTitle={deleteDetailActivityItem.title}
              onBack={setModalOff}
              onConfirm={onHandlerDeleteDetailActivity}
            />
          ) : (
            <InformAlert fromItem="item" />
          )}
          {isEditButtonClick && (
            <FormDetailActivity
              onHandlerClose={onHandlerCloseEdit}
              formTitle="Edit List Item"
              formType="edit"
            />
          )}
          {isAddButtonClick && (
            <FormDetailActivity
              onHandlerClose={onHandlerCloseAdd}
              formTitle="Tambah List Item"
              formType="add"
            />
          )}
        </Modal>
      )}
      <HeaderDetailActivity onHandlerAddButton={onHandlerAddButton} />
      <DetailActivitys>
        {detailActivitys.length === 0 ? (
          <EmptyDetailActivity />
        ) : (
          detailActivitys.map(
            ({ activity_group_id, id, is_active, priority, title }) => (
              <DetailActivityItem
                onEditDetailActivityItem={getEditDetailActivity}
                onDeleteDetailActivityItem={getDeleteDetailActivityItem}
                key={id}
                id={id}
                title={title}
                priority={priority}
                activity_group_id={activity_group_id}
                is_active={is_active}
              />
            ),
          )
        )}
      </DetailActivitys>
    </>
  );
};

export default DetailActivity;
