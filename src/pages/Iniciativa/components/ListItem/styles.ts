import styled, { css } from "styled-components/native";
import NumericInput from "react-native-numeric-input";
import { Role } from "../..";

type BoxContainer = {
  flex: number;
};

type Container = {
  role: Role;
};

export const Container = styled.View<Container>`
  flex-direction: row;
  align-items: center;

  gap: 20px;

  border-width: 1px;
  border-color: white;

  padding: 5px 10px;

  ${({ role }) => {
    let style = css``;

    if (role === "chefe") {
      style = css`
        background-color: #ec273f;
      `;
    } else if (role === "inimigo") {
      style = css`
        background-color: #3e3b65;
      `;
    } else {
      style = css`
        background-color: #5ab552;
      `;
    }

    return style;
  }};
`;

export const ListText = styled.Text`
  color: white;
`;

export const InputContainer = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  color: white;
`;

export const Input = styled(NumericInput)`
  width: 30px;
  height: 30px;

  background-color: #eee;

  padding-left: 12px;
`;

export const BoxContainer = styled.View<BoxContainer>`
  flex-direction: row;
  flex: ${({ flex }) => flex};
  justify-content: center;
  align-items: center;

  gap: 5px;
`;
