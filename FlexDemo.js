import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exo from "./Exo";
import SectionListDemo from "./SectionListDemo";

export default function App() {
  return (
    <SectionListDemo />
    // <View style={styles.container}>
    //   <View style={styles.view1}>
    //     <Text>View 1</Text>
    //   </View>
    //   <View style={styles.view2}>
    //     <Text>View 2</Text>
    //   </View>
    //   <View style={styles.view3}>
    //     <Text>View 3</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
});
