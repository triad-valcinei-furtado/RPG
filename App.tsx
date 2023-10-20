import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Inventory from "./src/pages/Inventory";
import Iniciativa from "./src/pages/Iniciativa";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: "#1b1b1b", paddingTop: 20 },
            tabBarLabelStyle: { color: "#fff" },
            tabBarIndicatorStyle: { backgroundColor: "#fff" },
          }}
        >
          <Tab.Screen name="Carteira" component={Inventory} />
          <Tab.Screen name="Batalha" component={Iniciativa} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="light" />
    </>
  );
}
