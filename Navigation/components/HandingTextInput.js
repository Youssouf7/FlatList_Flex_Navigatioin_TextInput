import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function HandingTextInput() {
  const [name, setName] = useState("");
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Handling Text Inputs</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newvalue) => {
          setName(newvalue);
        }}
      />
      <TextInput
        passwordRules="minLenght:6"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newvalue) => {
          setPassword(newvalue);
          newvalue.length > 5 ? setValid(true) : setValid(false);
        }}
      />
      <Text>Your name is : {name}</Text>
      {!valid && <Text>The password must be longer than 5 characters</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default HandingTextInput;
