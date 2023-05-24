import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const AuthTabBar = () => {
  return (
    <Tab.Navigator tabBar={() => null} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};
