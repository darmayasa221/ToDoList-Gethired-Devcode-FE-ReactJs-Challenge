import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as PlusSvg } from "../../assets/svg/tabler_plus.svg";

type TypeAddButton = {
  dataCy: string;
};
const Button = styled.button({
  position: "relative",
  color: "white",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  background: "var(--primary-color)",
  width: "159px",
  height: "54px",
  borderRadius: "45px",
  padding: "0px 21px",
  fontWeight: 600,
  fontSize: "18px",
});
const ButtonText = styled.span({
  position: "absolute",
  textTransform: "capitalize",
  width: "100%",
  left: 10,
});

const AddButton: React.FC<TypeAddButton> = ({ dataCy }) => {
  return (
    <Button type="submit" data-cy={dataCy}>
      <PlusSvg />
      <ButtonText>Tambah</ButtonText>
    </Button>
  );
};

export default AddButton;
