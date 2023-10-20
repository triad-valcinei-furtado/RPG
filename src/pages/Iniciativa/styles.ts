import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding-top: 40px;

  background-color: #1b1b1b;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { gap: 10 },
})``;

export const ListButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;

  border-width: 1px;
  border-color: white;

  padding: 5px 10px;

  margin-bottom: 10px;
`;

export const ListButtonText = styled.Text`
  color: white;
`;

export const Quantidade = styled.Text`
  color: white;
`;

export const EnemyInput = styled.TextInput`
  background-color: white;

  padding-left: 16px;

  height: 40px;

  margin: 10px 0;
`;

export const Quantidades = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
`;
