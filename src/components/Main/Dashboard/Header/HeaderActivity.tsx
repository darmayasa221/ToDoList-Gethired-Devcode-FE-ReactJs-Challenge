import styled from "@emotion/styled";
import React, { useContext, memo } from "react";
import { fontStyle } from "../../../../globalStyle/fonts";
import { mq } from "../../../../globalStyle/responsive";
import ActivityContext from "../../../../store/Activity/activityContext";
import AddButton from "../../../UI/AddButton";

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const Title = styled.h2(fontStyle, {
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: 700,
  color: "#111111",
  [mq[2] as string]: {
    fontSize: "36px",
  },
});
const HeaderActivity = () => {
  const { addActivity } = useContext(ActivityContext);
  return (
    <Container>
      <Title data-cy="activity-title">Activity</Title>
      <AddButton dataCy="activity-add-button" onClick={addActivity} />
    </Container>
  );
};

export default memo(HeaderActivity);
