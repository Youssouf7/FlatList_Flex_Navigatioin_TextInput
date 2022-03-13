import { Text, View, StyleSheet, FlatList } from "react-native";

function ListScreen() {
  const friends = [
    { name: "Friend #1", age: 20, id: 1 },
    { name: "Friend #2", age: 34, id: 2 },
    { name: "Friend #3", age: 54, id: 3 },
    { name: "Friend #4", age: 78, id: 4 },
  ];
  return (
    <View>
      <Text>This is the list Screens</Text>
      <FlatList
        keyExtractor={(friend) => {
          return friend.id;
        }}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={style.item}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    marginVertical: 10,
  },
});
export default ListScreen;
