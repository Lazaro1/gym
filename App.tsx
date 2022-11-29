import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { THEME } from "./src/theme";
import { SigIn } from "@screens/Sigin";

export default function App() {
  const [fontsLoades] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoades ? <SigIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
