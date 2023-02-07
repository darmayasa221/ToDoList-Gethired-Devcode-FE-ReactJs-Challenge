import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { dataPriority } from "./dataPriorty";
import { ReactComponent as ChevronDownSvg } from "../../assets/svg/tabler_chevron-down.svg";
import { ReactComponent as ChevronUpSvg } from "../../assets/svg/tabler_chevron-up.svg";
import { ReactComponent as CheckSvg } from "../../assets/svg/tabler_check.svg";
import { headerFontStyle } from "../../globalStyle/fonts";
import { mq } from "../../globalStyle/responsive";

type TypeItemPriority = {
  color: string;
  title: string;
};
const WrapperPriority = styled.button({
  padding: "14px",
  borderRadius: "6px",
  position: "relative",
  height: "52px",
  border: "1px solid #E5E5E5",
  background: "#F4F4F4",
  cursor: "pointer",
  [mq[1] as string]: {
    width: "205px",
  },
});
const SelectItem = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const TitleDefaultItem = styled.p(headerFontStyle, {
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "#111111",
});
const ContainerList = styled.div({
  borderTop: "1px solid #E5E5E5",
  borderLeft: "1px solid #E5E5E5",
  borderRight: "1px solid #E5E5E5",
  background: "#FFFFFF",
  position: "absolute",
  width: "278px",
  top: "2.8rem",
  left: "-1px",
  zIndex: 2,
  [mq[1] as string]: {
    width: "205px",
  },
});
const WrapperList = styled.div({
  padding: "14px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #E5E5E5",
  ":hover": {
    background: "#16ABF8",
  },
});
const WrapperLeftSide = styled.div({
  display: "flex",
  columnGap: "19px",
  alignItems: "center",
});
const Indicator = styled.div<{ indicatorColor: string }>(
  ({ indicatorColor }) => ({
    width: "14px",
    height: "14px",
    borderRadius: "100%",
    background: indicatorColor,
  }),
);
const TitleItem = styled.p(headerFontStyle, {
  fontSize: "14px",
  color: "#4A4A4A",
});
const WrapperRightSide = styled.div({});
const ItemPriority: FC<TypeItemPriority> = ({ color, title }) => {
  return (
    <WrapperList>
      <WrapperLeftSide>
        <Indicator indicatorColor={color} />
        <TitleItem>{title}</TitleItem>
      </WrapperLeftSide>
      <WrapperRightSide>
        <CheckSvg />
      </WrapperRightSide>
    </WrapperList>
  );
};
const Priority = () => {
  const [klick, setKlick] = useState<boolean>(false);
  return (
    <WrapperPriority
      type="button"
      onClick={() => {
        setKlick(!klick);
      }}
    >
      <SelectItem>
        <TitleDefaultItem>Pilih Priority</TitleDefaultItem>
        {klick ? <ChevronUpSvg /> : <ChevronDownSvg />}
      </SelectItem>
      {klick && (
        <ContainerList>
          {dataPriority.map(({ color, title }) => (
            <ItemPriority color={color} title={title} key={color} />
          ))}
        </ContainerList>
      )}
    </WrapperPriority>
  );
};

export default Priority;
