import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as LatestSvg } from "../../assets/svg/sort-selection-latest.svg";
import { ReactComponent as OldestSvg } from "../../assets/svg/sort-selection-oldest.svg";
import { ReactComponent as AzSvg } from "../../assets/svg/sort-selection-az.svg";
import { ReactComponent as ZaSvg } from "../../assets/svg/sort-selection-za.svg";
import { ReactComponent as NotFinishedSvg } from "../../assets/svg/sort-selection-not-finished.svg";
import { card } from "../../globalStyle/card";
import { headerFontStyle } from "../../globalStyle/fonts";
import { mq } from "../../globalStyle/responsive";

const ContainerSort = styled.div(card, {
  position: "absolute",
  top: "3.5rem",
  right: "3rem",
  width: "187px",
  height: "207px",
  border: "1px solid #E5E5E5",
  display: "flex",
  flexDirection: "column",
  [mq[1] as string]: {
    width: "235px",
    height: "260px",
    right: 0,
  },
});
const WrapperItem = styled.div({
  display: "flex",
  padding: "0 16px",
  alignItems: "center",
  columnGap: "11px",
  borderBottom: "1px solid #E5E5E5",
  height: "41.4px",
  cursor: "pointer",
  [mq[1] as string]: {
    height: "52px",
    columnGap: "15px",
  },
});
const Title = styled.p(headerFontStyle, {
  fontWeight: 400,
  fontSize: "14px",
  [mq[1] as string]: {
    fontSize: "16px",
  },
});
const Sort = () => {
  return (
    <ContainerSort>
      <WrapperItem>
        <LatestSvg />
        <Title>Terbaru</Title>
      </WrapperItem>
      <WrapperItem>
        <OldestSvg />
        <Title>Terlama</Title>
      </WrapperItem>
      <WrapperItem>
        <AzSvg />
        <Title>A-Z</Title>
      </WrapperItem>
      <WrapperItem>
        <ZaSvg />
        <Title>Z-A</Title>
      </WrapperItem>
      <WrapperItem style={{ border: "none" }}>
        <NotFinishedSvg />
        <Title>Belum Selesai</Title>
      </WrapperItem>
    </ContainerSort>
  );
};

export default Sort;
