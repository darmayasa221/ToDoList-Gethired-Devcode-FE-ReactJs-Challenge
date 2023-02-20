import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as LatestSvg } from "../../assets/svg/sort-selection-latest.svg";
import { ReactComponent as OldestSvg } from "../../assets/svg/sort-selection-oldest.svg";
import { ReactComponent as AzSvg } from "../../assets/svg/sort-selection-az.svg";
import { ReactComponent as ZaSvg } from "../../assets/svg/sort-selection-za.svg";
import { ReactComponent as NotFinishedSvg } from "../../assets/svg/sort-selection-not-finished.svg";
import { ReactComponent as CheckSvg } from "../../assets/svg/tabler_check.svg";
import { card } from "../../globalStyle/card";
import { fontStyle } from "../../globalStyle/fonts";
import { mq } from "../../globalStyle/responsive";

const ContainerSort = styled.div(card, {
  position: "absolute",
  top: "2.5rem",
  // right: "3rem",
  width: "187px",
  height: "207px",
  border: "1px solid #E5E5E5",
  display: "flex",
  flexDirection: "column",
  [mq[2] as string]: {
    top: "4rem",
    width: "235px",
    height: "260px",
    right: 0,
  },
});
const WrapperItem = styled.div({
  display: "flex",
  padding: "0 16px",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #E5E5E5",
  height: "41.4px",
  cursor: "pointer",
  [mq[2] as string]: {
    height: "52px",
    columnGap: "15px",
  },
});
const WrapperLeftSide = styled.div({
  display: "flex",
  alignItems: "center",
  columnGap: "11px",
  [mq[2] as string]: {
    columnGap: "15px",
  },
});
const Title = styled.p(fontStyle, {
  fontWeight: 400,
  fontSize: "14px",
  color: "#4A4A4A",
  [mq[2] as string]: {
    fontSize: "16px",
  },
});
const dataSVG = [
  {
    elemet: <LatestSvg />,
    title: "Terbaru",
    isSelected: false,
  },
  {
    elemet: <OldestSvg />,
    title: "Terlama",
    isSelected: false,
  },
  {
    elemet: <AzSvg />,
    title: "A-Z",
    isSelected: false,
  },
  {
    elemet: <ZaSvg />,
    title: "Z-A",
    isSelected: false,
  },
  {
    elemet: <NotFinishedSvg />,
    title: "Belum Selesai",
    isSelected: false,
  },
];
const Sort = () => {
  return (
    <ContainerSort>
      {dataSVG.map(({ elemet, title, isSelected }, index) =>
        index === dataSVG.length - 1 ? (
          <WrapperItem style={{ border: "none" }} key={title}>
            <WrapperLeftSide>
              {elemet}
              <Title>{title}</Title>
            </WrapperLeftSide>
            <CheckSvg
              css={{
                width: "14px",
                height: "14px",
                [mq[0] as string]: {
                  width: "18px",
                  height: "18px",
                },
              }}
            />
          </WrapperItem>
        ) : (
          <WrapperItem key={title}>
            <WrapperLeftSide>
              {elemet}
              <Title>{title}</Title>
            </WrapperLeftSide>
            <CheckSvg
              css={{
                width: "14px",
                height: "14px",
                [mq[0] as string]: {
                  width: "18px",
                  height: "18px",
                },
              }}
            />
          </WrapperItem>
        ),
      )}
    </ContainerSort>
  );
};

export default Sort;
