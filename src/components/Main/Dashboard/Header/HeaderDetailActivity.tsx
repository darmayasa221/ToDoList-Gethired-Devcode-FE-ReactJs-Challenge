import styled from "@emotion/styled";
import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackButtonSvg } from "../../../../assets/svg/todo-back-button.svg";
import { ReactComponent as EditButtonSvg } from "../../../../assets/svg/todo-title-edit-button.svg";
import { ReactComponent as SortButtonSvg } from "../../../../assets/svg/todo-sort-button.svg";
import { fontStyle } from "../../../../globalStyle/fonts";
import { mq } from "../../../../globalStyle/responsive";
import AddButton from "../../../UI/AddButton";
import Sort from "../../../Collapse/Sort";
import ActivityContext from "../../../../store/Activity/activityContext";

type TypeHeaderDetailActivity = {
  onHandlerAddButton: () => void;
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  [mq[2] as string]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const WrapperLeftSide = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  borderBottom: "1px solid #D8D8D8",
  paddingBottom: "10px",
  [mq[2] as string]: {
    borderBottom: "none",
    paddingBottom: 0,
  },
});
const Title = styled.p(fontStyle, {
  cursor: "pointer",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  color: "#111111",
  position: "absolute",
  paddingLeft: "32px",
  zIndex: 2,
  [mq[2] as string]: {
    position: "unset",
    paddingLeft: 0,
    zIndex: "unset",
    paddingRight: "19px",
    fontWeight: 700,
    fontSize: "36px",
  },
});
const WrapperRightSide = styled.div({
  position: "relative",
  display: "flex",
  justifyContent: "end",
  marginTop: "24px",
  columnGap: "18px",
  [mq[2] as string]: {
    paddingLeft: 0,
    justifyContent: "space-between",
    marginTop: 0,
    width: "231px",
  },
});
const SortButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const BackButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const EditButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const InputTitle = styled.input(fontStyle, {
  outline: "none",
  border: "none",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  color: "#111111",
  background: "none",
  ":focus": {
    borderBottom: "1px solid #111111",
  },
  [mq[2] as string]: {
    fontWeight: 700,
    fontSize: "36px",
  },
});
const HeaderDetailActivity: FC<TypeHeaderDetailActivity> = ({
  onHandlerAddButton,
}) => {
  const { updateActivity, activity } = useContext(ActivityContext);
  const [activityTitle, setActivityTitle] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isSortVisible, setIsSortVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setActivityTitle(event.target.value);
  };
  const onBlurInputTitle = async () => {
    setIsEdit(false);
    await updateActivity({ title: activityTitle, activityId: activity.id });
  };
  useEffect(() => {
    setActivityTitle(activity.title);
    return () => {
      setActivityTitle("");
    };
  }, [activity]);
  return (
    <Container>
      <WrapperLeftSide>
        <BackButton type="button" onClick={() => navigate("/")}>
          <BackButtonSvg
            css={{
              zIndex: 4,
              cursor: "pointer",
              width: "21px",
              height: "21px",
              [mq[2] as string]: {
                width: "32px",
                height: "31px",
              },
            }}
          />
        </BackButton>
        {!isEdit ? (
          <Title onClick={() => setIsEdit(true)}>{activityTitle}</Title>
        ) : (
          <InputTitle
            type="text"
            onChange={onChangeTitle}
            value={activityTitle}
            onBlur={onBlurInputTitle}
            autoFocus
          />
        )}
        <EditButton type="button" onClick={() => setIsEdit(!isEdit)}>
          <EditButtonSvg
            css={{
              cursor: "pointer",
              width: "20px",
              height: "20px",
              [mq[2] as string]: {
                width: "24px",
                height: "24px",
              },
            }}
          />
        </EditButton>
      </WrapperLeftSide>
      <WrapperRightSide>
        <SortButton
          type="button"
          onClick={() => setIsSortVisible(!isSortVisible)}
        >
          <SortButtonSvg
            css={{
              cursor: "pointer",
              width: "38px",
              height: "38px",
              [mq[2] as string]: {
                width: "54px",
                height: "54px",
              },
            }}
          />
        </SortButton>
        {isSortVisible && <Sort />}
        <AddButton onClick={onHandlerAddButton} dataCy="todo-add-button" />
      </WrapperRightSide>
    </Container>
  );
};

export default HeaderDetailActivity;
