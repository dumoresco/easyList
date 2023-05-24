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
import { useListRepository } from "../../hooks/useListRepository";

type InputQtdProps = {
  value?: number;
  onChange: (value: number) => void;
};

const InputQtd: React.FC<InputQtdProps> = ({ value = 0, onChange }) => {
  return (
    <Container>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => onChange(value - 1)}
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
          onChangeText={(value) => onChange(parseInt(value))}
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
          value={value.toString()}
        />
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => onChange(value + 1)}
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
