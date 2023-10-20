import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import UserContextProvider from "./src/contexts/userContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

      <ExpoStatusBar style="light" />
    </UserContextProvider>
  );
}
