import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { AppTabBar } from "./AppTabBar";
import { AuthTabBar } from "./AuthTabBar";
import AsyncStorage from "@react-native-community/async-storage";

export const Routes = () => {
  // pega o token do local storage
  return (
    <NavigationContainer>
      <AuthTabBar />
    </NavigationContainer>
  );
};
