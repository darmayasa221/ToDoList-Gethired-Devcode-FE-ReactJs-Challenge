import styled from "@emotion/styled";
import React from "react";
import { card } from "../../../globalStyle/card";
import { headerFontStyle } from "../../../globalStyle/fonts";
import AddButton from "../../UI/AddButton";
import { ReactComponent as CloseSvg } from "../../../assets/svg/modal-add-close-button.svg";
import Priority from "../../Dropdowns/Priority";
import { mq } from "../../../globalStyle/responsive";

const Form = styled.form(card, {
  height: "382px",
  width: "320px",
  display: "flex",
  flexDirection: "column",
  [mq[1] as string]: {
    width: "830px",
    height: "403px",
  },
});
const HeaderForm = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "17px 20px",
  alignItems: "center",
});
const TitleForm = styled.h1(headerFontStyle, {
  fontWeight: 600,
  fontSize: "16px",
});
const BodyForm = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "232px",
  borderTop: "1px solid #E5E5E5",
  borderBottom: "1px solid #E5E5E5",
  padding: "23px 20px 28px 22px",
  rowGap: "12px",
});
const Label = styled.label({});
const Input = styled.input(headerFontStyle, {
  width: "100%",
  fontSize: "14px",
  fontWeight: "400",
  borderRadius: "6px",
  padding: "14px",
  height: "52px",
  border: "1px solid #E5E5E5",
  ":focus": {
    border: "1px solid #16ABF8",
  },
});
const FooterForm = styled.div({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "0 27px",
});
const FormDetailActivity = () => {
  return (
    <Form>
      <HeaderForm>
        <TitleForm>Tambah / edit</TitleForm>
        <CloseSvg />
      </HeaderForm>
      <BodyForm>
        <Label htmlFor="title">Nama ListItem</Label>
        <Input type="tex" id="title" />
        <Label htmlFor="title">Nama ListItem</Label>
        <Priority />
      </BodyForm>
      <FooterForm>
        <AddButton dataCy="/" />
      </FooterForm>
    </Form>
  );
};

export default FormDetailActivity;
