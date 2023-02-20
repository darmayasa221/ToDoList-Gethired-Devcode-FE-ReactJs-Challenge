import styled from "@emotion/styled";
import React, { FC } from "react";
import { card } from "../../../../../globalStyle/card";
import { ReactComponent as EditButtonSvg } from "../../../../../assets/svg/todo-title-edit-button.svg";
import { ReactComponent as TrashSvg } from "../../../../../assets/svg/tabler_trash.svg";
import { fontStyle } from "../../../../../globalStyle/fonts";
import { mq } from "../../../../../globalStyle/responsive";
import { TypeDetailActivity } from "../../../../../types/DetailActivity/detailActivityType";
import colorPriority from "../../../../../commons/colorPriority";

type TypeDetailActivityItem = TypeDetailActivity & {
  onDeleteDetailActivityItem: (data: { id: number; title: string }) => void;
  onEditDetailActivityItem: (data: {
    id: number;
    title: string;
    priority: string;
  }) => void;
};

const Wrapper = styled.div(card, {
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  [mq[2] as string]: {
    padding: "30px",
  },
});
const WrapperLeftSide = styled.div({
  display: "flex",
  alignItems: "center",
  columnGap: "14px",
  [mq[2] as string]: {
    columnGap: "22px",
  },
});
const CheckBoxInput = styled.input({
  cursor: "pointer",
  width: "12px",
  height: "12px",
  appearance: "none",
  outline: "1px solid #C7C7C7",
  [mq[2] as string]: {
    width: "20px",
    height: "20px",
  },
  ":checked": {
    appearance: "checkbox",
    background: "#16ABF8",
    outline: "1px solid #16ABF8",
  },
});
const Indicator = styled.span<{ color: string }>(({ color }) => ({
  width: "5px",
  height: "5px",
  background: color,
  borderRadius: "100%",
  [mq[2] as string]: {
    width: "9px",
    height: "9px",
  },
}));
const Title = styled.p(fontStyle, {
  fontWeight: 500,
  fontSize: "14px",
  [mq[2] as string]: {
    fontSize: "18px",
  },
});
const WrapperRightSide = styled.div({
  display: "flex",
  alignItems: "center",
});
const RemoveButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const EditButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});
const DetailActivityItem: FC<TypeDetailActivityItem> = ({
  activity_group_id,
  id,
  is_active,
  priority,
  title,
  onDeleteDetailActivityItem,
  onEditDetailActivityItem,
}) => {
  const color = colorPriority(priority);
  return (
    <Wrapper>
      <WrapperLeftSide>
        <CheckBoxInput type="checkbox" />
        <Indicator color={color} />
        <Title>{title}</Title>
        <EditButton
          type="button"
          onClick={() =>
            onEditDetailActivityItem({ id: Number(id), title, priority })
          }
        >
          <EditButtonSvg
            css={{
              cursor: "pointer",
              width: "12px",
              height: "12px",
              [mq[2] as string]: {
                width: "20px",
                height: "20px",
              },
            }}
          />
        </EditButton>
      </WrapperLeftSide>
      <WrapperRightSide>
        <RemoveButton
          onClick={() => onDeleteDetailActivityItem({ id: Number(id), title })}
        >
          <TrashSvg
            css={{
              cursor: "pointer",
              width: "16px",
              height: "16px",
              [mq[2] as string]: {
                width: "24px",
                height: "24px",
              },
            }}
          />
        </RemoveButton>
      </WrapperRightSide>
    </Wrapper>
  );
};

export default DetailActivityItem;
