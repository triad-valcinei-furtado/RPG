import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Inventory from "../Inventory";
import Iniciativa from "../Iniciativa";
import Info from "../Info";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#1b1b1b", paddingTop: 20 },
        tabBarLabelStyle: { color: "#fff" },
        tabBarIndicatorStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen name="Inicio" component={Info} />
      <Tab.Screen name="Carteira" component={Inventory} />
      <Tab.Screen name="Sala" component={Iniciativa} />
    </Tab.Navigator>
  );
};

export default Home;
