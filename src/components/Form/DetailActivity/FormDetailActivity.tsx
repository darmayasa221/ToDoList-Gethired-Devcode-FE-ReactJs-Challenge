import styled from "@emotion/styled";
import React, { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { card } from "../../../globalStyle/card";
import { fontStyle } from "../../../globalStyle/fonts";
import { ReactComponent as CloseSvg } from "../../../assets/svg/modal-add-close-button.svg";
import Priority from "../../Dropdowns/Priority";
import { mq } from "../../../globalStyle/responsive";
import RegularButton from "../../UI/RegularButton";
import DetailActivityContext from "../../../store/DetailActivity/detailActivityContext";

type TypeFormDetailActivity = {
  formTitle: string;
  formType: "add" | "edit";
  onHandlerClose: () => void;
  edited?: {
    title: string;
    priority: string;
    idDetailActivity: number;
  };
};
const Form = styled.form(card, {
  position: "fixed",
  zIndex: 31,
  width: "320px",
  height: "382px",
  display: "flex",
  flexDirection: "column",
  overflow: "scroll",
  [mq[1] as string]: {
    width: "830px",
    height: "403px",
    overflow: "unset",
  },
});
const Header = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "17px 20px",
  alignItems: "center",
});
const CloseButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const Title = styled.h1(fontStyle, {
  fontWeight: 600,
  fontSize: "16px",
  color: "#111111",
  [mq[2] as string]: {
    fontSize: "18px",
  },
});
const Body = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "232px",
  borderTop: "1px solid #E5E5E5",
  borderBottom: "1px solid #E5E5E5",
  padding: "23px 20px 28px 22px",
  rowGap: "12px",
});
const Label = styled.label(fontStyle, {
  fontWeight: 600,
  fontSize: "10px",
  color: "#111111",
  [mq[2] as string]: {
    fontSize: "12px",
  },
});
const Input = styled.input(fontStyle, {
  fontSize: "14px",
  fontWeight: 400,
  borderRadius: "6px",
  padding: "16px",
  height: "52px",
  border: "1px solid #E5E5E5",
  [mq[2] as string]: {
    fontSize: "16px",
  },
  ":focus": {
    border: "1px solid #16ABF8",
  },
});
const Footer = styled.div({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "0 27px",
});
const FormDetailActivity: FC<TypeFormDetailActivity> = ({
  formTitle,
  formType,
  edited,
  onHandlerClose,
}) => {
  const [isDiabled, setIsDisabled] = useState<boolean>(true);
  const [data, setData] = useState<{ title: string; priority: string }>({
    title: edited?.title || "",
    priority: edited?.priority || "",
  });
  const { addDetailActivity, editDetailActivity } = useContext(
    DetailActivityContext,
  );
  const priorityValue = (priority: string) => {
    setData((prev) => ({ ...prev, priority }));
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const isInput = event.target.value.trim().length === 0;
    setIsDisabled(isInput);
    setData((prev) => ({ ...prev, title: event.target.value }));
  };
  const onHandlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formType === "add") {
      await addDetailActivity(data);
    } else {
      await editDetailActivity(data, edited?.idDetailActivity);
    }
    onHandlerClose();
  };
  return (
    <Form onSubmit={onHandlerSubmit}>
      <Header>
        <Title>{formTitle}</Title>
        <CloseButton type="button" onClick={onHandlerClose}>
          <CloseSvg />
        </CloseButton>
      </Header>
      <Body>
        <Label htmlFor="title">Nama ListItem</Label>
        <Input
          onChange={onChangeTitle}
          type="tex"
          id="title"
          placeholder="Tambahkan nama list item"
        />
        <Label htmlFor="title">Priority</Label>
        <Priority onChange={priorityValue} />
      </Body>
      <Footer>
        <RegularButton
          type="submit"
          disabled={isDiabled}
          backgroundColor="#16ABF8"
          text="Simpan"
          textColor="white"
        />
      </Footer>
    </Form>
  );
};

export default FormDetailActivity;
