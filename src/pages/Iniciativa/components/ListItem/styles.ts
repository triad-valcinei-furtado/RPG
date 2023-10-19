import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 20px;

  border-width: 1px;
  border-color: white;

  padding: 5px 10px;
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

export const Input = styled.TextInput.attrs({ keyboardType: "decimal-pad" })`
  width: 30px;
  height: 30px;

  background-color: #eee;

  padding-left: 12px;
`;
