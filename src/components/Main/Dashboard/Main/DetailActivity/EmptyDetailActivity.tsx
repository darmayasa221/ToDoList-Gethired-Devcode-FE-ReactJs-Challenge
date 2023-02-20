import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ReactComponent as EmptyDetailActivitySvg } from "../../../../../assets/svg/todo-empty-state.svg";
import { mq } from "../../../../../globalStyle/responsive";
import DetailActivityContext from "../../../../../store/DetailActivity/detailActivityContext";

const WrapperEmptyDetailActivity = styled.div({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  paddingTop: "80px",
});
const EmptyDetailActivity = () => {
  const { addDetailActivityDefaultValue } = useContext(DetailActivityContext);
  return (
    <WrapperEmptyDetailActivity onClick={addDetailActivityDefaultValue}>
      <EmptyDetailActivitySvg
        css={{
          width: "320px",
          height: "245px",
          [mq[2] as string]: {
            width: "541px",
            height: "413px",
          },
        }}
      />
    </WrapperEmptyDetailActivity>
  );
};

export default EmptyDetailActivity;
