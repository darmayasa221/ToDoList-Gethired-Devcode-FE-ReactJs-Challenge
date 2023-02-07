import styled from "@emotion/styled";
import React from "react";
import { card } from "../../globalStyle/card";
import AddButton from "../UI/AddButton";
import { ReactComponent as DeleteSvg } from "../../assets/svg/modal-delete-icon.svg";
import { headerFontStyle } from "../../globalStyle/fonts";
import { mq } from "../../globalStyle/responsive";

const WrapperConfirmAlert = styled.div(card, {
  width: "320px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  padding: "0 38px",
  [mq[1] as string]: {
    width: "490px",
    height: "355px",
  },
});
const HeaderConfirmAlert = styled.div({
  flex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const BodyConfirmAlert = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Description = styled.p(headerFontStyle, {});
const FooterConfirmAlert = styled.div({
  flex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

const ConfirmAlert = () => {
  return (
    <WrapperConfirmAlert>
      <HeaderConfirmAlert>
        <DeleteSvg />
      </HeaderConfirmAlert>
      <BodyConfirmAlert>
        <Description>
          Desc{" "}
          <b>
            <q>a</q>?
          </b>
        </Description>
      </BodyConfirmAlert>
      <FooterConfirmAlert>
        <AddButton />
        <AddButton />
      </FooterConfirmAlert>
    </WrapperConfirmAlert>
  );
};

export default ConfirmAlert;
