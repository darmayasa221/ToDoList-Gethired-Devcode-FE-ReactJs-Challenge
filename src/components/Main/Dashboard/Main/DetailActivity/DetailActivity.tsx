import styled from "@emotion/styled";
import React from "react";
import { card } from "../../../../../globalStyle/card";
import { ReactComponent as EditButtonSvg } from "../../../../../assets/svg/todo-title-edit-button.svg";
import { ReactComponent as TrashSvg } from "../../../../../assets/svg/tabler_trash.svg";
import { headerFontStyle } from "../../../../../globalStyle/fonts";

const WrapperItem = styled.div(card, {
  display: "flex",
  padding: "30px",
  justifyContent: "space-between",
});
const WrapperLeftSide = styled.div({
  display: "flex",
  alignItems: "center",
  columnGap: "22px",
});
const CheckBoxInput = styled.input({
  cursor: "pointer",
  width: "20px",
  height: "20px",
  appearance: "none",
  outline: "1px solid #C7C7C7",
  ":checked": {
    appearance: "checkbox",
    background: "#16ABF8",
    outline: "1px solid #16ABF8",
  },
});
const Indicator = styled.span({
  width: "9px",
  height: "9px",
  background: "red",
  borderRadius: "100%",
});
const TitleItem = styled.p(headerFontStyle, {
  fontWeight: "normal",
  fontSize: "18px",
});
const WrapperRightSide = styled.div({
  display: "flex",
  alignItems: "center",
});
const DetailActivity = () => {
  return (
    <WrapperItem>
      <WrapperLeftSide>
        <CheckBoxInput type="checkbox" />
        <Indicator />
        <TitleItem> New Todo</TitleItem>
        <EditButtonSvg />
      </WrapperLeftSide>
      <WrapperRightSide>
        <TrashSvg cursor="pointer" />
      </WrapperRightSide>
    </WrapperItem>
  );
};

export default DetailActivity;
