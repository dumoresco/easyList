import React from "react";

import { Container } from "./styles";
import Octicons from "react-native-vector-icons/Octicons";
import { Text } from "react-native";

type ButtonModalProps = {
  onPress: () => void;
  title: string;
};

const ButtonModalFooter: React.FC<ButtonModalProps> = ({ onPress, title }) => {
  return (
    <Container onPress={onPress}>
      <Octicons name="trash" size={25} color={"#E83F5B"} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          marginLeft: 8,
          color: "#E83F5B",
        }}
      >
        {title}
      </Text>
    </Container>
  );
};

export default ButtonModalFooter;
