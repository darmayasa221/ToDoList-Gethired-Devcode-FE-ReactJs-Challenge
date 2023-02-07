import styled from "@emotion/styled";
import React from "react";
import { headerFontStyle } from "../../../../globalStyle/fonts";
import AddButton from "../../../UI/AddButton";

const HeaderActivityContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const TitleActivity = styled.h2(headerFontStyle, {
  textTransform: "capitalize",
  fontSize: "36px",
});
const HeaderActivity = () => {
  return (
    <HeaderActivityContainer>
      <TitleActivity data-cy="activity-title">Activity</TitleActivity>
      <AddButton dataCy="activity-add-button" />
    </HeaderActivityContainer>
  );
};

export default HeaderActivity;
