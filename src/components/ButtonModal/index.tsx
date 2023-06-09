import React from "react";

import { Container } from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";
import { View } from "react-native";

type ButtonModalProps = {
  onPress: () => void;
  title: string;
  backgroundColor: string;
  icon: string;
  disabled: boolean;
};

const ButtonModal: React.FC<ButtonModalProps> = ({
  onPress,
  title,
  backgroundColor,
  icon,
  disabled,
}) => {
  return (
    <Container
      onPress={onPress}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <MaterialCommunityIcons name={icon} size={25} color={"#fff"} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "300",
          marginLeft: 8,
          color: "#fff",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: 25,
          height: 30,
        }}
      ></View>
    </Container>
  );
};

export default ButtonModal;
