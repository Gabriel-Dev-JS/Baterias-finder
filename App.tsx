import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { color } from "./src/Cores";
import { MyTabs } from "./src/components/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
      <StatusBar backgroundColor={color.button} barStyle={"dark-content"}/>
    </NavigationContainer>
  );
} 
