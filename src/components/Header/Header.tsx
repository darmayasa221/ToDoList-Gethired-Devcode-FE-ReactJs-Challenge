import styled from "@emotion/styled";
import React from "react";
import { headerFontStyle } from "../../globalStyle/fonts";
import { mq } from "../../globalStyle/responsive";

const ContainerHeader = styled.header({
  backgroundColor: "var(--primary-color)",
  height: "105px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "var(--mobile)",
  [mq[2] as string]: {
    padding: "var(--mq-1200)",
  },
});
const WrapperHeader = styled.div({
  width: "1002px",
});
const TextHeader = styled.h1(headerFontStyle, {
  color: "rgba(255, 255, 255, 1)",
  fontSize: 24,
  textTransform: "uppercase",
});

const Header = () => {
  return (
    <ContainerHeader data-cy="header-background">
      <WrapperHeader>
        <TextHeader data-cy="header-title">Todo List App</TextHeader>
      </WrapperHeader>
    </ContainerHeader>
  );
};

export default Header;
