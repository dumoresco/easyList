import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Container,
  UserInfoContainer,
  UserNameContainer,
  UserName,
  Avatar,
  LightText,
  ListInfoContainer,
  HighlightedText,
} from "./styles";
import { useRoute } from "@react-navigation/native";

type Params = {
  token: string;
};

type UserInfo = {
  id: string;
  email: string;
  given_name: string;
  picture: string;
};

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const route = useRoute();
  const { token } = route.params as Params;

  const loadUserInformation = async () => {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = await response.json();

    return setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUserInformation();
  }, []);

  console.log(userInfo);

  return (
    <Container>
      <UserInfoContainer>
        <UserNameContainer>
          <UserName>
            <LightText>Olá</LightText>, {userInfo?.given_name}
          </UserName>
          <Text
            style={{
              fontSize: 13,
              color: "#fff",
              textAlign: "left",
              marginTop: 5,
            }}
          >
            Organize suas idas ao mercado
          </Text>
        </UserNameContainer>
        <Avatar source={{ uri: userInfo?.picture }} />
      </UserInfoContainer>

      <ListInfoContainer>
        <View style={styles.listInfoContainerItem1}>
          <Text style={styles.listInfoContainer}>
            Você tem <HighlightedText>15 itens</HighlightedText> na sua lista
          </Text>
        </View>
        <View style={styles.listInfoContainerItem2}>
          <Text style={styles.subtitle}>Total da lista</Text>
          <HighlightedText>R$ 150,00</HighlightedText>
        </View>
      </ListInfoContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 13,
    color: "#fff",
  },
  listInfoContainer: {
    fontSize: 13,
    color: "#fff",
    textAlign: "left",
    width: 150,
  },
  listInfoContainerItem1: {
    marginEnd: 20,
  },
  listInfoContainerItem2: {
    paddingStart: 20,
    borderStartColor: "#979797",
    borderStartWidth: 1,
  },
});
