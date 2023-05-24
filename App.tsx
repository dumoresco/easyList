import { useFonts } from "expo-font";
import { Routes } from "./src/routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Light": require("./assets/fonts/Lexend-Light.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-SemiBold": require("./assets/fonts/Lexend-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Routes />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
