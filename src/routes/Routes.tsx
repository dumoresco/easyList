import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabBar } from "./AppTabBar";
import { AuthTabBar } from "./AuthTabBar";
import { useAuth } from "../hooks/useAuth";

export const Routes = () => {
  const { isAuth } = useAuth();

  return isAuth ? <AppTabBar /> : <AuthTabBar />;
};
