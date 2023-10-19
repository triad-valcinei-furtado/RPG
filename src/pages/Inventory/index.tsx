import React, { useState, useMemo } from "react";

import RadioGroup from "react-native-radio-buttons-group";

import image from "../../assets/bg.jpg";

import imageGold from "../../assets/gold.png";
import imageSilver from "../../assets/silver.png";
import imageCopper from "../../assets/copper.png";

import { Container, Background } from "./styles";
import Value from "./components/Value";

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
    } else {
      console.log("Saldo inválido");
    }
  }

  function saldoTotalAgrupado(): number {
    let saldoCarteira = 0;

    saldoCarteira += PO * 100;
    saldoCarteira += PP * 10;
    saldoCarteira += PC;
    return saldoCarteira;
  }

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Option 1",
        value: "option1",
      },
      {
        id: "2",
        label: "Option 2",
        value: "option2",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("");

  return (
    <Container>
      <Background source={image} resizeMode="cover">
        <Value icon={imageGold} label="Ouro" value={carteira.PO} />
        <Value icon={imageSilver} label="Silver" value={carteira.PP} />
        <Value icon={imageCopper} label="Cobre" value={carteira.PC} />

        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </Background>
    </Container>
  );
};

export default Inventory;
