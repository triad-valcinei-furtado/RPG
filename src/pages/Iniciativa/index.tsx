import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  Container,
  EnemyInput,
  List,
  ListButton,
  ListButtonText,
  Quantidade,
} from "./styles";
import ListItem from "./components/ListItem";

export type Entity = {
  jogador: string;
  modificadorDestreza: number;
  bonus: number;
  iniciativa: number;
};

const Iniciativa = () => {
  const gerador = (value: number) => Math.floor(Math.random() * value);

  const criarIniciativa = (modificadorDestreza: number, bonus: number) => {
    return gerador(20) + 1 + modificadorDestreza + bonus;
  };

  const [jogadoresIniciativa, setJogadoresIniciativa] = useState<Entity[]>([
    {
      jogador: "Guilherme",
      modificadorDestreza: 3,
      bonus: 2,
      iniciativa: criarIniciativa(3, 2),
    },
    {
      jogador: "Pedrinho",
      modificadorDestreza: 4,
      bonus: 1,
      iniciativa: criarIniciativa(4, 1),
    },
    {
      jogador: "Vafucaju",
      modificadorDestreza: 2,
      bonus: 2,
      iniciativa: criarIniciativa(2, 2),
    },
  ]);

  const [entidades, setEntidades] = useState<Entity[]>();

  useEffect(() => {
    // Gerando inimigos aleatórios e adicionando à lista

    const numeroInimigos = gerador(8) + 1;
    const novosJogadoresInimigos = [...jogadoresIniciativa];

    for (let i = 1; i <= numeroInimigos; i++) {
      const destrezaRandom = gerador(5);
      const bonusRandom = gerador(3);
      novosJogadoresInimigos.push({
        jogador: `Inimigo ${i}`,
        modificadorDestreza: destrezaRandom,
        bonus: bonusRandom,
        iniciativa: criarIniciativa(destrezaRandom, bonusRandom),
      });
    }

    // Ordenando a lista de jogadores por iniciativa e nome
    novosJogadoresInimigos.sort((a, b) => {
      if (a.iniciativa === b.iniciativa) {
        return a.jogador.localeCompare(b.jogador);
      }
      return b.iniciativa - a.iniciativa;
    });

    // setJogadoresIniciativa(novosJogadoresInimigos);
  }, []);

  const ListHeader = () => {
    return (
      <>
        <EnemyInput />
        <ListButton>
          <ListButtonText>Adicionar Inimigo</ListButtonText>
        </ListButton>
        <ListButton>
          <ListButtonText>Adicionar Inimigo Aleatório</ListButtonText>
        </ListButton>
        <ListButton>
          <ListButtonText>Rolar Iniciativa</ListButtonText>
        </ListButton>
        <Quantidade>Quantidade de Inimigos: 0</Quantidade>
      </>
    );
  };

  return (
    <Container>
      <List
        ListHeaderComponent={ListHeader}
        data={jogadoresIniciativa}
        //@ts-ignore
        renderItem={({ item }) => <ListItem data={item} />}
      />
    </Container>
  );
};

export default Iniciativa;
