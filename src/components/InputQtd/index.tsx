import React, { useState } from "react";

import { Container } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
const InputQtd: React.FC = () => {
  const [qtd, setQtd] = useState("0");

  const handleQtd = (value: string) => {
    setQtd(value);
  };

  const handleIncrement = () => {
    setQtd((prevState) => String(Number(prevState) + 1));
  };

  const handleDecrement = () => {
    if (Number(qtd) > 0) {
      setQtd((prevState) => String(Number(prevState) - 1));
    }
  };

  return (
    <Container>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleDecrement()}
      >
        <AntDesign name="minus" size={20} color={"#50555C"} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          onChangeText={(value) => handleQtd(value)}
          keyboardType="numeric"
          style={{
            width: 40,
            borderLeftColor: "#E3E3E5",
            borderLeftWidth: 1,

            borderRightColor: "#E3E3E5",
            borderRightWidth: 1,

            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          value={qtd}
        />
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleIncrement()}
      >
        <AntDesign name="plus" size={20} color={"#50555C"} />
      </TouchableOpacity>
    </Container>
  );
};

export default InputQtd;

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
});
