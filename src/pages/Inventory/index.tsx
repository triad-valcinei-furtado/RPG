import React, { useState, useMemo } from "react";

import RadioGroup from "react-native-radio-buttons-group";
import { RadioButton } from "react-native-paper";

import image from "../../assets/bg.jpg";

import imageGold from "../../assets/gold.png";
import imageSilver from "../../assets/silver.png";
import imageCopper from "../../assets/copper.png";

import {
  Container,
  Background,
  RadioContainer,
  RadioText,
  Options,
  Input,
  Buttons,
  Button,
  ButtonText,
} from "./styles";
import Value from "./components/Value";
import { View } from "react-native";

export type Carteira = {
  PO: number;
  PP: number;
  PC: number;
};

type Moeda = "ouro" | "prata" | "cobre";

const Inventory: React.FC = () => {
  const [carteira, setCarteira] = useState<Carteira>({
    PO: 2,
    PP: 0,
    PC: 0,
  });

  const { PC, PO, PP } = carteira;

  function depositar(deposito: number, moeda: Moeda): void {
    const valorOperacao = calcularValorOperacao(deposito, moeda);
    alterarSaldo(valorOperacao, "DEPOSITAR");
  }

  function comprar(precoItem: number, moeda: Moeda): void {
    console.log(precoItem);
    console.log(moeda);

    const valorOperacao = calcularValorOperacao(precoItem, moeda);

    alterarSaldo(valorOperacao, "COMPRAR");
  }

  function calcularValorOperacao(valor: number, moeda: Moeda): number {
    switch (moeda) {
      case "ouro":
        return valor * 100;
      case "prata":
        return valor * 10;
      case "cobre":
        return valor;
      default:
        return 0;
    }
  }

  function alterarSaldo(valorOperacao: number, operacao: string) {
    const saldoCarteira = saldoTotalAgrupado();

    let novoSaldo = 0;

    switch (operacao) {
      case "DEPOSITAR":
        novoSaldo = saldoCarteira + valorOperacao;
        break;
      case "COMPRAR":
        novoSaldo = saldoCarteira - valorOperacao;
        break;
      default:
        novoSaldo = saldoCarteira;
        break;
    }

    if (novoSaldo >= 0) {
      const ouro = Math.floor(novoSaldo / 100);

      setCarteira((state) => ({ ...state, PO: ouro }));

      novoSaldo %= 100;

      const prata = Math.floor(novoSaldo / 10);
      const bronze = novoSaldo % 10;

      setCarteira((state) => ({ ...state, PP: prata, PC: bronze }));
    }
  }

  function saldoTotalAgrupado(): number {
    let saldoCarteira = 0;

    saldoCarteira += PO * 100;
    saldoCarteira += PP * 10;
    saldoCarteira += PC;
    return saldoCarteira;
  }

  const [value, setValue] = useState<Moeda>("cobre");
  const [amount, setAmount] = useState("");

  return (
    <Container>
      <Background source={image} resizeMode="cover">
        <Value icon={imageGold} label="Ouro" value={carteira.PO} />
        <Value icon={imageSilver} label="Silver" value={carteira.PP} />
        <Value icon={imageCopper} label="Cobre" value={carteira.PC} />

        <Options>
          <View style={{ flexDirection: "row" }}>
            <Input
              value={amount}
              onChangeText={setAmount}
              keyboardType="number-pad"
              maxLength={3}
            />
            <RadioButton.Group
              onValueChange={(newValue: any) => setValue(newValue)}
              value={value}
            >
              <RadioContainer>
                <RadioButton value="ouro" />
                <RadioText onPress={() => setValue("ouro")}>Ouro</RadioText>
              </RadioContainer>
            </RadioButton.Group>

            <RadioButton.Group
              onValueChange={(newValue: any) => setValue(newValue)}
              value={value}
            >
              <RadioContainer>
                <RadioButton value="prata" />
                <RadioText onPress={() => setValue("prata")}>Prata</RadioText>
              </RadioContainer>
            </RadioButton.Group>
            <RadioButton.Group
              onValueChange={(newValue: any) => setValue(newValue)}
              value={value}
            >
              <RadioContainer>
                <RadioButton value="cobre" />
                <RadioText onPress={() => setValue("cobre")}>Cobre</RadioText>
              </RadioContainer>
            </RadioButton.Group>
          </View>

          <Buttons>
            <Button
              onPress={() => {
                depositar(parseInt(amount), value);
              }}
              color="green"
            >
              <ButtonText>Aumentar</ButtonText>
            </Button>
            <Button
              onPress={() => {
                comprar(parseInt(amount), value);
              }}
              color="red"
            >
              <ButtonText>Diminuir</ButtonText>
            </Button>
          </Buttons>
        </Options>
      </Background>
    </Container>
  );
};

export default Inventory;
