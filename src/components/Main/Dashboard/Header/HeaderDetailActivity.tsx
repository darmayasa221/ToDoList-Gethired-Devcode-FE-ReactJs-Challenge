import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as BackButtonSvg } from "../../../../assets/svg/todo-back-button.svg";
import { ReactComponent as EditButtonSvg } from "../../../../assets/svg/todo-title-edit-button.svg";
import { ReactComponent as SortButtonSvg } from "../../../../assets/svg/todo-sort-button.svg";
import { headerFontStyle } from "../../../../globalStyle/fonts";
import { mq } from "../../../../globalStyle/responsive";
import AddButton from "../../../UI/AddButton";
import Sort from "../../../Collapse/Sort";

const HeaderDetailActivityContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  [mq[1] as string]: {
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
  [mq[1] as string]: {
    borderBottom: "none",
    paddingBottom: 0,
  },
});
const ActivityTitle = styled.p(headerFontStyle, {
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  position: "absolute",
  paddingLeft: "32px",
  zIndex: 2,
  [mq[1] as string]: {
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
  [mq[1] as string]: {
    paddingLeft: 0,
    justifyContent: "space-between",
    marginTop: 0,
    width: "231px",
  },
});
const HeaderDetailActivity = () => {
  return (
    <HeaderDetailActivityContainer>
      <WrapperLeftSide>
        <BackButtonSvg style={{ zIndex: 4, cursor: "pointer" }} />
        <ActivityTitle>New Activity</ActivityTitle>
        <EditButtonSvg style={{ cursor: "pointer" }} />
      </WrapperLeftSide>
      <WrapperRightSide>
        <SortButtonSvg style={{ cursor: "pointer" }} />
        {/* <Sort /> */}
        <AddButton dataCy="todo-add-button" />
      </WrapperRightSide>
    </HeaderDetailActivityContainer>
  );
};

export default HeaderDetailActivity;
