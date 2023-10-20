import React from "react";

import { useUser } from "../../hooks/useUser";

import { Body, Container, Header, Nome } from "./styles";

const Info = () => {
  const { userInfo } = useUser();
  return (
    <Container>
      <Header>
        <Nome>{userInfo.role} : </Nome>
        <Nome>{userInfo.name}</Nome>
      </Header>

      <Body></Body>
    </Container>
  );
};

export default Info;
