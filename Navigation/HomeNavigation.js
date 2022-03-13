import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ContactDetail from "./screens/ContactDetail";
import CreateContact from "./screens/CreateContact";

const HomeNavigation = () => {
  const HomeNavigation = createNativeStackNavigator();
  return (
    <HomeNavigation.Navigator initialRouteName="Home">
      <HomeNavigation.Screen name="Home" component={HomeScreen} />
      <HomeNavigation.Screen name="Contact_Detail" component={ContactDetail} />
      <HomeNavigation.Screen name="Create_Contact" component={CreateContact} />
    </HomeNavigation.Navigator>
  );
};

export default HomeNavigation;
