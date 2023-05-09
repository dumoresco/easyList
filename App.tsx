import { StyleSheet } from "react-native";
import Login from "./src/screens/Login";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes/Routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Light": require("./assets/fonts/Lexend-Light.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-SemiBold": require("./assets/fonts/Lexend-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
