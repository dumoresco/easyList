import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
const Tab = createBottomTabNavigator();

export const AppTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="home"
              size={24}
              color={focused ? "#50555C" : "#EDEDED"}
            />
          ),
        }}
      />
      {/* Botão com icone + */}
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="diff-added"
              size={24}
              color={focused ? "#50555C" : "#EDEDED"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="list-unordered"
              size={24}
              color={focused ? "#50555C" : "#EDEDED"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
