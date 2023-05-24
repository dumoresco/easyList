import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
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

import * as AuthSession from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export default function Login() {
  const { handleLogin } = useAuth();

  return (
    <Container>
      <IlustrationContainer>
        <Ilustration source={require("../../../assets/Ilustration.png")} />
      </IlustrationContainer>
      <Title>Poupe tempo, energia e dinheiro em suas compras no mercado</Title>

      <BtnLoginWithGoogle
        onPress={() => {
          handleLogin();
        }}
      >
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
