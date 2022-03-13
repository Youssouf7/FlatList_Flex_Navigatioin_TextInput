import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>This the settings Page</Text>
      <View style={styles.set}>
        <Text>Dark Mode</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  set: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default Settings;
