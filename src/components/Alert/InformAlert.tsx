import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as InformationSvg } from "../../assets/svg/modal-information-icon.svg";
import { card } from "../../globalStyle/card";
import { mq } from "../../globalStyle/responsive";

const WrapperInformAlert = styled.div(card, {
  width: "323px",
  height: "58px",
  padding: "17px 27px",
  display: "flex",
  columnGap: "13px",
  alignItems: "center",
  [mq[1] as string]: {
    width: "490px",
  },
});
const Description = styled.p({});
const InformAlert = () => {
  return (
    <WrapperInformAlert>
      <InformationSvg />
      <Description>Description</Description>
    </WrapperInformAlert>
  );
};

export default InformAlert;
