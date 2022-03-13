import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Exo from "./Exo";
import SectionListDemo from "./SectionListDemo";
import AppNavigation from "./Navigation/AppNavigation";

export default function App() {
  const [name, setName] = useState("");
  return (
    // <View style={styles.container}>
    //   <Text>Enter Your name</Text>

    //   <TextInput
    //     style={{ borderWidth: 1, height: 30, width: 200 }}
    //     onChangeText={(value) => {
    //       setName(value);
    //     }}
    //   />
    //   <Button
    //     title="Summit"
    //     onPress={() => {
    //       Alert.alert("Warnign", "This is a warning", [
    //         { title: "OK", onPress: () => {} },
    //       ]);
    //     }}
    //   />
    // </View>
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
