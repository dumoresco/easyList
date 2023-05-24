import React from "react";

import { Container } from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
  hasIcon?: boolean;
};

const Input: React.FC<InputProps> = ({ hasIcon, ...props }) => {
  return (
    <Container hasIcon={hasIcon}>
      {hasIcon && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F4F4F4",
            width: 40,
            alignSelf: "stretch",
            borderRightColor: "#E3E3E5",
            borderRightWidth: 1,
          }}
        >
          <FontAwesome5 name="dollar-sign" size={15} color={"#50555C"} />
        </View>
      )}

      <TextInput
        style={{
          paddingHorizontal: 10,
          flex: 1,
        }}
        {...props}
      />
    </Container>
  );
};

export default Input;
