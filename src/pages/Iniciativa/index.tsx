import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import uuid from "react-native-uuid";
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
import ListHeader from "./components/ListHeader";

export type Role = "jogador" | "inimigo" | "chefe";

export type Entity = {
  id: string | number[];
  name: string;
  destreza: number;
  bonus: number;
  iniciativa: number;
  role: Role;
};

const gerador = (value: number) => Math.floor(Math.random() * value);

const criarIniciativa = (modificadorDestreza: number, bonus: number) => {
  return gerador(20) + 1 + modificadorDestreza + bonus;
};

const Iniciativa = () => {
  const [jogadores, setJogadores] = useState<Entity[]>([]);
  const [inimigos, setInimigos] = useState<Entity[]>([]);
  const [entidades, setEntidades] = useState<Entity[]>([]);

  const [entityName, setEntityName] = useState("");

  const handleAddEntity = (
    list: React.Dispatch<React.SetStateAction<Entity[]>>,
    role: Role
  ) => {
    const entity = {
      id: uuid.v4(),
      name: entityName,
      destreza: 0,
      bonus: 0,
      iniciativa: 0,
      role,
    };

    list((oldState) => [...oldState, entity]);
    setEntidades((oldState) => [...oldState, entity]);
    setEntityName("");
  };

  const rolarIniciativa = () => {
    const entidadesCopia = entidades.map((item) => {
      item.iniciativa = criarIniciativa(item.destreza, item.bonus);
      return item;
    });

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
        id: uuid.v4(),
        name: `Inimigo ${i}`,
        destreza: destrezaRandom,
        bonus: bonusRandom,
        iniciativa: criarIniciativa(destrezaRandom, bonusRandom),
        role: "inimigo",
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

  return (
    <Container>
      <ListHeader
        entityName={entityName}
        rolarIniciativa={rolarIniciativa}
        setInimigos={setInimigos}
        setEntityName={setEntityName}
        handleAddEntity={handleAddEntity}
        setJogadores={setJogadores}
        contagemJogadores={jogadores.length}
        contagemInimigos={inimigos.length}
      />
      <List
        data={entidades}
        renderItem={({ item }) => (
          //@ts-ignore
          <ListItem data={item} setEntidades={setEntidades} />
        )}
      />
    </Container>
  );
};

export default Iniciativa;
