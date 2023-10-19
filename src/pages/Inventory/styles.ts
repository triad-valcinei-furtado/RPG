import styled from "styled-components/native";

type ButtonProps = {
  color: string;
};

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;

  padding: 16px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RadioText = styled.Text`
  color: white;

  font-size: 18px;
`;

export const Options = styled.View`
  margin-top: auto;
  height: 300px;

  gap: 40px;

  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  width: 30%;

  padding: 8px;

  border-radius: 5px;

  background-color: white;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  justify-content: center;
  align-items: center;

  background-color: ${({ color }) => color};

  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
`;
