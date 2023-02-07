import styled from "@emotion/styled";
import React from "react";

import { ReactComponent as TrashSvg } from "../../../../../assets/svg/tabler_trash.svg";
import { card } from "../../../../../globalStyle/card";
import { headerFontStyle } from "../../../../../globalStyle/fonts";

const HeaderActivity = styled.div(headerFontStyle, {
  cursor: "pointer",
  flex: 1,
  overflow: "hidden",
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  fontWeight: 700,
  fontSize: "18px",
  color: "#111111",
});
const BodyActivity = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const DateDescription = styled.p(headerFontStyle, {
  color: "#888888",
  fontWeight: 500,
  fontSize: "14px",
});
const RemoveButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const CardActivity = styled.div(card, {
  display: "flex",
  flexDirection: "column",
  padding: "25px",
});

const Activity = () => {
  return (
    <CardActivity data-cy="activity-item">
      <HeaderActivity data-cy="activity-item-title">
        New Activity
      </HeaderActivity>
      <BodyActivity>
        <DateDescription data-cy="activity-item-date">
          6 Oktober 2021
        </DateDescription>
        <RemoveButton data-cy="activity-item-delete-button">
          <TrashSvg />
        </RemoveButton>
      </BodyActivity>
    </CardActivity>
  );
};

export default Activity;
