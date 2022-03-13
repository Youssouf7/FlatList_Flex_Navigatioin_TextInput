import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const name = "Youssouf";
  return (
    <View>
      <Text style={style.mytext}>Geting startted with react native</Text>
      <Text style={style.mysubtext}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mytext: {
    fontSize: 40,
    color: "black",
  },
  mysubtext: {
    fontSize: 20,
  },
});

export default ComponentScreen;
