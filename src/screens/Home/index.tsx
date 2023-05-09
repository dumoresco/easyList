import { View, Text } from "react-native";
import React from "react";
import { Container, Photo } from "./styles";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Photo />

      <Photo />

      <Photo />

      <Photo />

      <Photo />

      <Photo />
    </Container>
  );
}
