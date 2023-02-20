import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ReactComponent as EmptyActivitySvg } from "../../../../../assets/svg/activity-empty-state.svg";
import { mq } from "../../../../../globalStyle/responsive";
import ActivityContext from "../../../../../store/Activity/activityContext";

const Wrapper = styled.div({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  paddingTop: "59px",
});
export const EmptyActivity = () => {
  const { addActivity } = useContext(ActivityContext);
  return (
    <Wrapper onClick={addActivity} data-cy="activity-empty-state">
      <EmptyActivitySvg
        css={{
          width: "319px",
          height: "204px",
          [mq[2] as string]: {
            width: "767px",
            height: "490px",
          },
        }}
      />
    </Wrapper>
  );
};
