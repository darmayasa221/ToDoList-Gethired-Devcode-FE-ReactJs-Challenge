import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as EmptyDetailActivitySvg } from "../../../../../assets/svg/todo-empty-state.svg";

const WrapperEmptyDetailActivity = styled.div({
  display: "flex",
  justifyContent: "center",
});
const EmptyDetailActivity = () => {
  return (
    <WrapperEmptyDetailActivity>
      <EmptyDetailActivitySvg />
    </WrapperEmptyDetailActivity>
  );
};

export default EmptyDetailActivity;
