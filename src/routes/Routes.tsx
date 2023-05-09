import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabBar";
import { BlurView } from "expo-blur";

export const Routes = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
