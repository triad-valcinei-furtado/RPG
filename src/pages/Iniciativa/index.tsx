import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  Container,
  EnemyInput,
  List,
  ListButton,
  ListButtonText,
  Quantidade,
  Quantidades,
} from "./styles";
import ListItem from "./components/ListItem";

export type Entity = {
  name: string;
  modificadorDestreza: number;
  bonus: number;
  iniciativa: number;
};

const gerador = (value: number) => Math.floor(Math.random() * value);

const criarIniciativa = (modificadorDestreza: number, bonus: number) => {
  return gerador(20) + 1 + modificadorDestreza + bonus;
};

const joga = [
  {
    name: "Guilherme",
    modificadorDestreza: 3,
    bonus: 2,
    iniciativa: criarIniciativa(3, 2),
  },
  {
    name: "Pedrinho",
    modificadorDestreza: 4,
    bonus: 1,
    iniciativa: criarIniciativa(4, 1),
  },
  {
    name: "Vafucaju",
    modificadorDestreza: 2,
    bonus: 2,
    iniciativa: criarIniciativa(2, 2),
  },
];

const Iniciativa = () => {
  const [jogadores, setJogadores] = useState<Entity[]>([]);
  const [inimigos, setInimigos] = useState<Entity[]>([]);
  const [entidades, setEntidades] = useState<Entity[]>([]);

  const [entityName, setEntityName] = useState("");

  const handleAddEntity = (
    list: React.Dispatch<React.SetStateAction<Entity[]>>
  ) => {
    const entity = {
      name: entityName,
      modificadorDestreza: 0,
      bonus: 0,
      iniciativa: 0,
    };

    list((oldState) => ({ ...oldState, entity }));
    setEntidades((oldState) => ({ ...oldState, entity }));
    setEntityName("");
  };

  const rolarIniciativa = () => {
    const entidadesCopia = [...entidades];

    entidadesCopia.sort((a, b) => {
      if (a.iniciativa === b.iniciativa) {
        return a.name.localeCompare(b.name);
      }
      return b.iniciativa - a.iniciativa;
    });

    setEntidades(entidadesCopia);
  };

  useEffect(() => {
    // Gerando inimigos aleatórios e adicionando à lista

    const numeroInimigos = gerador(8) + 1;
    const novosJogadoresInimigos = [...jogadores];

    for (let i = 1; i <= numeroInimigos; i++) {
      const destrezaRandom = gerador(5);
      const bonusRandom = gerador(3);
      novosJogadoresInimigos.push({
        name: `Inimigo ${i}`,
        modificadorDestreza: destrezaRandom,
        bonus: bonusRandom,
        iniciativa: criarIniciativa(destrezaRandom, bonusRandom),
      });
    }

    // Ordenando a lista de jogadores por iniciativa e nome
    novosJogadoresInimigos.sort((a, b) => {
      if (a.iniciativa === b.iniciativa) {
        return a.name.localeCompare(b.name);
      }
      return b.iniciativa - a.iniciativa;
    });

    // setJogadoresIniciativa(novosJogadoresInimigos);
  }, []);

  const ListHeader = () => {
    return (
      <>
        <EnemyInput value={entityName} onChangeText={setEntityName} />
        <ListButton onPress={() => handleAddEntity(setJogadores)}>
          <ListButtonText>Adicionar Jogador</ListButtonText>
        </ListButton>
        <ListButton onPress={() => handleAddEntity(setInimigos)}>
          <ListButtonText>Adicionar Inimigo</ListButtonText>
        </ListButton>
        <ListButton>
          <ListButtonText>Adicionar Inimigo Aleatório</ListButtonText>
        </ListButton>
        <ListButton onPress={rolarIniciativa}>
          <ListButtonText>Rolar Iniciativa</ListButtonText>
        </ListButton>
        <Quantidades>
          <Quantidade>Jogadores: 0</Quantidade>
          <Quantidade>Inimigos: 0</Quantidade>
        </Quantidades>
      </>
    );
  };

  return (
    <Container>
      <List
        ListHeaderComponent={ListHeader}
        data={entidades}
        //@ts-ignore
        renderItem={({ item }) => <ListItem data={item} />}
      />
    </Container>
  );
};

export default Iniciativa;
