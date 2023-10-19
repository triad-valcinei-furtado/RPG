import { View } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Inventory from "./src/pages/Inventory";
import { SafeAreaView } from "react-native-safe-area-context";
import Iniciativa from "./src/pages/Iniciativa";

export default function App() {
  return (
    <>
      <Iniciativa />
      <ExpoStatusBar style="light" />
    </>
  );
}
