import React from "react";
import {
  EnemyInput,
  ListButton,
  ListButtonText,
  Quantidade,
  Quantidades,
} from "../../styles";
import { Entity, Role } from "../..";

// import { Container } from './styles';

type Props = {
  handleAddEntity: (
    list: React.Dispatch<React.SetStateAction<Entity[]>>,
    role: Role
  ) => void;
  entityName: string;
  randomGenerateEnemy: () => void;
  rolarIniciativa: () => void;
  setInimigos: React.Dispatch<React.SetStateAction<Entity[]>>;
  setJogadores: React.Dispatch<React.SetStateAction<Entity[]>>;
  setEntityName: React.Dispatch<React.SetStateAction<string>>;
  contagemJogadores: number;
  contagemInimigos: number;
};

const ListHeader = ({
  entityName,
  rolarIniciativa,
  setInimigos,
  setEntityName,
  handleAddEntity,
  setJogadores,
  contagemJogadores,
  contagemInimigos,
  randomGenerateEnemy,
}: Props) => {
  return (
    <>
      <EnemyInput value={entityName} onChangeText={setEntityName} />
      <ListButton onPress={() => handleAddEntity(setJogadores, "jogador")}>
        <ListButtonText>Adicionar Jogador</ListButtonText>
      </ListButton>
      <ListButton onPress={() => handleAddEntity(setInimigos, "inimigo")}>
        <ListButtonText>Adicionar Inimigo</ListButtonText>
      </ListButton>

      <ListButton onPress={() => handleAddEntity(setInimigos, "chefe")}>
        <ListButtonText>Adicionar Chefe</ListButtonText>
      </ListButton>
      <ListButton onPress={randomGenerateEnemy}>
        <ListButtonText>Adicionar Inimigo Aleatório</ListButtonText>
      </ListButton>
      <ListButton onPress={rolarIniciativa}>
        <ListButtonText>Rolar Iniciativa</ListButtonText>
      </ListButton>
      <Quantidades>
        <Quantidade>Jogadores: {contagemJogadores}</Quantidade>
        <Quantidade>Inimigos: {contagemInimigos}</Quantidade>
      </Quantidades>
    </>
  );
};

export default ListHeader;
