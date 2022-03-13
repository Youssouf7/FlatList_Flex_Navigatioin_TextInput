import { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const counterReducer = (count, action) => {
  return count + action;
};

const CounterScreen = () => {
  // let count = 0;
  // const [count, setCounter] = useState(0);
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <View>
      <Text>Counter</Text>
      <Button title="Increase" onPress={() => dispatch(1)} />
      <View style={{ height: 20 }}></View>
      <Button title="Decrease" onPress={() => dispatch(-1)} />
      <Text style={{ textAlign: "center", fontSize: 30, marginBottom: 10 }}>
        Current Counter
      </Text>
      <Text style={{ textAlign: "center", fontSize: 30 }}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
