import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as EmptyActivitySvg } from "../../../../../assets/svg/activity-empty-state.svg";

const WrapperEmptyActivity = styled.div({
  display: "flex",
  justifyContent: "center",
});
export const EmptyActivity = () => {
  return (
    <WrapperEmptyActivity>
      <EmptyActivitySvg />
    </WrapperEmptyActivity>
  );
};
