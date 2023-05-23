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

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export default function Login() {
  const navigation = useNavigation<any>();
  const handleLogin = async () => {
    const client_id =
      "1024418370603-g973a49ud46q35nm1a53lrivb19frqec.apps.googleusercontent.com";

    const redirect_uri = "https://auth.expo.io/@dumoresco/easyList";

    const response_type = "token";

    // pega o nome e o email do usuario
    const scope = encodeURI("profile email");

    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

    const { type, params } = (await AuthSession.startAsync({
      authUrl: url,
    })) as AuthResponse;

    if (type === "success") {
      navigation.navigate("Home", {
        token: params.access_token,
      });
    }
  };

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
