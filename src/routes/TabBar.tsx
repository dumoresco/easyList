import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Octicons from "react-native-vector-icons/Octicons";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#eeeeee",
        tabBarInactiveTintColor: "#CFCFCF",
        tabBarStyle: {
          paddingVertical: 10,
          height: 70,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Octicons name="home" size={24} color={"#686868"} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Octicons name="home" size={24} color={"#686868"} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Octicons name="home" size={24} color={"#686868"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
