import React from "react";
import { Input, InputContainer, Label, ListText, Container } from "./styles";
import { Entity } from "../..";

const ListItem = ({ data }: { data: Entity }) => {
  const Box = ({ label, value }: { label: string; value: number }) => {
    return (
      <InputContainer>
        <Label>{label}</Label>
        <Input value={String(value)} />
      </InputContainer>
    );
  };

  return (
    <Container>
      <ListText>{data.name}</ListText>
      <Box label="Destreza" value={data.modificadorDestreza} />
      <Box label="Bonus" value={data.bonus} />
    </Container>
  );
};

export default ListItem;
