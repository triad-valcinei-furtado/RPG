import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Input, Title } from "./stlyes";
import { Button, RadioButton } from "react-native-paper";
import { RadioContainer, RadioText } from "../Inventory/styles";
import { View } from "react-native";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const { setUserInfo } = useUser();
  const { navigate } = useNavigation();

  const [name, setName] = useState("");
  const [role, setRole] = useState<"Jogador" | "Mestre">("Jogador");

  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <RadioButton.Group
          onValueChange={(newValue: any) => setRole(newValue)}
          value={role}
        >
          <RadioContainer>
            <RadioButton value="Mestre" />
            <RadioText onPress={() => setRole("Mestre")}>Mestre</RadioText>
          </RadioContainer>
        </RadioButton.Group>
        <RadioButton.Group
          onValueChange={(newValue: any) => setRole(newValue)}
          value={role}
        >
          <RadioContainer>
            <RadioButton value="Jogador" />
            <RadioText onPress={() => setRole("Jogador")}>Jogador</RadioText>
          </RadioContainer>
        </RadioButton.Group>
      </View>

      <Title>Digite seu nome</Title>
      <Input value={name} onChangeText={setName} />
      <Button
        onPress={() => {
          if (name !== "") {
            setUserInfo({ name, role });
            navigate("Home" as never);
          }
        }}
      >
        Iniciar
      </Button>
    </Container>
  );
};

export default Login;
