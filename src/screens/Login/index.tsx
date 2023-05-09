import { View, Text } from "react-native";
import React from "react";

import {
  Container,
  Ilustration,
  IlustrationContainer,
  Title,
  BtnLoginWithGoogle,
  BtnLoginWithGoogleIcon,
  BtnLoginWithGoogleText,
  BtnLoginWithGoogleIconContainer,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <IlustrationContainer>
        <Ilustration source={require("../../../assets/Ilustration.png")} />
      </IlustrationContainer>
      <Title>Poupe tempo, energia e dinheiro em suas compras no mercado</Title>

      <BtnLoginWithGoogle>
        <BtnLoginWithGoogleIconContainer>
          <BtnLoginWithGoogleIcon
            source={require("../../../assets/google.png")}
          />
        </BtnLoginWithGoogleIconContainer>
        <BtnLoginWithGoogleText>Entrar com Google</BtnLoginWithGoogleText>
        <View />
      </BtnLoginWithGoogle>
    </Container>
  );
}
