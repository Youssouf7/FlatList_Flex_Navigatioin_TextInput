import { View, Button, Text, ScrollView, FlatList } from "react-native";
import { useState } from "react";
function ColorManagement() {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });
  //   Use three diffretn states
  const COLOR_INCREMENT = 5;
  const COLOR_DECREMENT = 5;
  return (
    <View>
      <Text>Color Management</Text>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25 }}>Red</Text>
        <Button
          color={"red"}
          title="More Red"
          onPress={() => {
            if (color.red + COLOR_INCREMENT > 255) return;
            else
              setColor((previous) => {
                return {
                  red: previous.red + COLOR_INCREMENT,
                  green: previous.green,
                  blue: previous.blue,
                };
              });
          }}
        />
        <Button color={"red"} title="Less Red" onPress={() => {}} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25 }}>Green</Text>
        <Button color={"green"} title="More Red" onPress={() => {}} />
        <Button color={"green"} title="Less Red" onPress={() => {}} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25 }}>Blue</Text>
        <Button color={"blue"} title="More Red" onPress={() => {}} />
        <Button color={"blue"} title="Less Red" onPress={() => {}} />
      </View>
      <View
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          backgroundColor:
            "rgb(" + color.red + "," + color.green + "," + color.blue + ")",
        }}
      ></View>
    </View>
  );
}

export default ColorManagement;
