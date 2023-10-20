import React from "react";
import {
  Input,
  InputContainer,
  Label,
  ListText,
  Container,
  BoxContainer,
} from "./styles";
import { Entity } from "../..";

const ListItem = ({
  data,
  setEntidades,
}: {
  data: Entity;
  setEntidades: React.Dispatch<React.SetStateAction<Entity[]>>;
}) => {
  const handleChangeModificador = (
    txt: number,
    modificador: "destreza" | "bonus"
  ) => {
    let number = txt;

    setEntidades((oldState) => {
      if (!number) {
        number = 0;
      }

      const newState = oldState.map((item) => {
        if (item.id === data.id) {
          item[modificador] = number;
        }

        return item;
      });

      return newState;
    });
  };

  const Box = ({ label, value }: { label: any; value: number }) => {
    return (
      <InputContainer>
        <Label>{label}</Label>
        <Input
          editable={false}
          value={value}
          totalWidth={90}
          textColor="#fff"
          rounded
          onChange={(txt) =>
            handleChangeModificador(txt, label.toLocaleLowerCase())
          }
        />
      </InputContainer>
    );
  };

  return (
    <Container role={data.role}>
      <BoxContainer flex={1}>
        <ListText>{data.iniciativa}</ListText>
        <ListText>{data.name}</ListText>
      </BoxContainer>

      <BoxContainer flex={3}>
        <Box label="Destreza" value={data.destreza} />
        <Box label="Bonus" value={data.bonus} />
      </BoxContainer>
      <BoxContainer flex={1}></BoxContainer>
    </Container>
  );
};

export default ListItem;
