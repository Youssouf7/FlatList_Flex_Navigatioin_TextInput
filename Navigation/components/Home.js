import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/selima.png")}
      />
      <Button
        title="Go to ComponentScreen"
        onPress={() => {
          navigation.navigate("ComponentScreen");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ListScreen");
        }}
      >
        <Text style={styles.button}>Go to ListScreen</Text>
      </TouchableOpacity>
      <Button
        title="Go to Image Demo"
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => {
          navigation.navigate("CounterScreen");
        }}
      />
      <Button
        title="Go to Color Screen Demo"
        onPress={() => {
          navigation.navigate("ColorGeneratorScreen");
        }}
      />
      <Button
        title="Go to Color Management Demo"
        onPress={() => {
          navigation.navigate("ColorManagement");
        }}
      />
      <Button
        title="Go to Color Reducer Demo"
        onPress={() => {
          navigation.navigate("ColorUsingReducer");
        }}
      />
      <Button
        title="Go to HandingTextInput Demo"
        onPress={() => {
          navigation.navigate("HandingTextInput");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  button: {
    marginVertical: 10,
    color: "blue",
    fontSize: 20,
  },
});
