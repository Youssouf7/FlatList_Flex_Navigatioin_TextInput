import { View, Button, Text, ScrollView, FlatList } from "react-native";
import { useState } from "react/cjs/react.development";
function ColorGeneratorScreen() {
  const [colors, setColors] = useState([]);
  const handleAddColor = () => {
    let color = randomRGB();
    setColors((previous) => {
      return [...previous, { red: color[0], green: color[1], blue: color[2] }];
    });
  };

  const randomRGB = () => {
    let color = Array();
    color[0] = Math.floor(Math.random() * 255);
    color[1] = Math.floor(Math.random() * 255);
    color[2] = Math.floor(Math.random() * 255);
    return color;
  };
  return (
    <View>
      <Text>Color Generator</Text>
      <Button title="Add a color" onPress={handleAddColor} />
      <ScrollView>
        {colors.map((color) => (
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor:
                "rgb(" + color.red + "," + color.green + "," + color.blue + ")",
              marginVertical: 10,
            }}
          ></View>
        ))}
        {/* <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: "re" + "d",
          marginVertical: 10,
        }}
      ></View> */}
      </ScrollView>
    </View>
  );
}

export default ColorGeneratorScreen;
