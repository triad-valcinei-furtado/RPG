import React from "react";
import { ImageSourcePropType } from "react-native";

import { Container, Icon, ValueText } from "./styles";

const Value = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: ImageSourcePropType;
}) => {
  return (
    <Container>
      <Icon source={icon} />
      <ValueText>{value}</ValueText>
    </Container>
  );
};

export default Value;
