import { Text, View, Button } from "react-native";
import { useReducer } from "react";

const COLOR_CHANGE = 15;
const reducer = (color, action) => {
  switch (action.colorToChange.toLowerCase()) {
    case "red":
      if (action.amount + color.red > 255 || action.amount + color.red < 0)
        return color;
      return { ...color, red: color.red + action.amount };
    case "green":
      if (action.amount + color.green > 255 || action.amount + color.green < 0)
        return color;
      return { ...color, green: color.green + action.amount };
    case "blue":
      if (action.amount + color.blue > 255 || action.amount + color.blue < 0)
        return color;
      return { ...color, blue: color.blue + action.amount };
    default:
      return color;
  }
};
function ColorUsingReducer() {
  const [color, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <Text>Using Reducer</Text>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25 }}>Red</Text>
        <Button
          color={"red"}
          title="More Red"
          onPress={() => {
            dispatch({
              colorToChange: "red",
              amount: COLOR_CHANGE,
            });
          }}
        />
        <Button
          color={"red"}
          title="Less Red"
          onPress={() => {
            dispatch({
              colorToChange: "red",
              amount: -1 * COLOR_CHANGE,
            });
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25 }}>Green</Text>
        <Button
          color={"green"}
          title="More Green"
          onPress={() => {
            dispatch({
              colorToChange: "green",
              amount: COLOR_CHANGE,
            });
          }}
        />
        <Button
          color={"green"}
          title="Less Green"
          onPress={() => {
            dispatch({
              colorToChange: "green",
              amount: -1 * COLOR_CHANGE,
            });
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25 }}>Blue</Text>
        <Button
          color={"blue"}
          title="More Blue"
          onPress={() => {
            dispatch({
              colorToChange: "blue",
              amount: COLOR_CHANGE,
            });
          }}
        />
        <Button
          color={"blue"}
          title="Less Blue"
          onPress={() => {
            dispatch({
              colorToChange: "blue",
              amount: -1 * COLOR_CHANGE,
            });
          }}
        />
      </View>
      <View
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
        }}
      ></View>
    </View>
  );
}

export default ColorUsingReducer;
