import { Image, StyleSheet, Text, View } from "react-native";
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
import { useAuth } from "../../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function Home() {
  const { token, userInfo, loadUserInformation, isFetching, handleLogout } =
    useAuth();
  useEffect(() => {
    loadUserInformation();
  }, [token]);

  console.log("[isFetching]", isFetching);

  return (
    <>
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
          <TouchableOpacity onPress={handleLogout}>
            <Avatar source={{ uri: userInfo?.picture }} />
          </TouchableOpacity>
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
      <View style={styles.sessionTitleContainer}>
        <Text style={styles.sessionTitle}>Meu carrinho</Text>
        <MaterialIcons name="filter-alt" size={24} color="#585666" />
      </View>
    </>
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
  sessionTitleContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50,
    paddingVertical: 20,
    borderBottomColor: "#E3E3E5",
    borderBottomWidth: 1,
  },
  sessionTitle: {
    color: "#585666",
    fontSize: 20,
    fontWeight: "bold",
  },
});
