import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../globalStyle/responsive";
import HeaderActivity from "./Dashboard/Header/HeaderActivity";
import { EmptyActivity } from "./Dashboard/Main/Activity/EmptyActivity";
import Activity from "./Dashboard/Main/Activity/Activity";
import HeaderDetailActivity from "./Dashboard/Header/HeaderDetailActivity";
import DetailActivity from "./Dashboard/Main/DetailActivity/DetailActivity";

const ContainerMain = styled.main({
  paddingTop: "43px !important",
  padding: "var(--mobile)",
  [mq[0] as string]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  [mq[2] as string]: {
    padding: "var(--mq-1200)",
  },
});
const WrapperMain = styled.div({
  maxWidth: "1002px",
});
const Activitys = styled.div({
  paddingTop: "49px",
  display: "grid",
  gridAutoRows: "234px",
  columnGap: "20px",
  rowGap: "26px",
  [mq[0] as string]: {
    gridTemplateColumns: "repeat(2, 235px)",
  },
  [mq[1] as string]: {
    gridTemplateColumns: "repeat(3, 235px)",
  },
  [mq[3] as string]: {
    gridTemplateColumns: "repeat(4, 235px)",
  },
});
const DetailActivitys = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingTop: "49px",
  rowGap: "10px",
});
const Main = () => {
  return (
    <ContainerMain>
      <WrapperMain>
        <HeaderDetailActivity />
        {/* <HeaderActivity /> */}
        {/* <EmptyActivity /> */}
        {/* <Activitys>
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
        </Activitys> */}
        <DetailActivitys>
          <DetailActivity />
          <DetailActivity />
          <DetailActivity />
          <DetailActivity />
          <DetailActivity />
        </DetailActivitys>
      </WrapperMain>
    </ContainerMain>
  );
};

export default Main;
