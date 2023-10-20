import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import uuid from "react-native-uuid";
import {
  Container,
  EnemyInput,
  Input,
  List,
  ListButton,
  ListButtonText,
  Quantidade,
  Quantidades,
} from "./styles";
import ListItem from "./components/ListItem";
import ListHeader from "./components/ListHeader";
import { nameData } from "../../utils/names";
import { Button } from "react-native-paper";

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
  const room = null;
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

  const randomGenerateEnemy = () => {
    const destrezaRandom = gerador(Math.floor(Math.random() * 5));
    const bonusRandom = gerador(Math.floor(Math.random() * 5));

    const { firstName, lastNamePrefix } = nameData;

    const firstNameId = Math.floor(Math.random() * firstName.length);
    const lastNamePrefixId = Math.floor(Math.random() * lastNamePrefix.length);

    const newEnemy: Entity = {
      id: uuid.v4(),
      name: `${firstName[firstNameId]} ${lastNamePrefix[lastNamePrefixId]}`,
      destreza: destrezaRandom,
      bonus: bonusRandom,
      iniciativa: 0,
      role: "inimigo",
    };

    setInimigos((oldState) => [...oldState, newEnemy]);
    setEntidades((oldState) => [...oldState, newEnemy]);
  };

  return (
    <Container>
      {room ? (
        <>
          <ListHeader
            entityName={entityName}
            rolarIniciativa={rolarIniciativa}
            setInimigos={setInimigos}
            setEntityName={setEntityName}
            handleAddEntity={handleAddEntity}
            setJogadores={setJogadores}
            contagemJogadores={jogadores.length}
            contagemInimigos={inimigos.length}
            randomGenerateEnemy={randomGenerateEnemy}
          />
          <List
            data={entidades}
            renderItem={({ item }) => (
              //@ts-ignore
              <ListItem data={item} setEntidades={setEntidades} />
            )}
          />
        </>
      ) : (
        <>
          <Input />
          <Button>Criar Sala</Button>
        </>
      )}
    </Container>
  );
};

export default Iniciativa;
