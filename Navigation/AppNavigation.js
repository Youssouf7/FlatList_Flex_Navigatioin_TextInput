import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";
import DrawerNavigation from "./DrawerNavigation";
import AuthNavigation from "./AuthNavigation";

const AppNavigation = () => {
  const IsLoggedIn = true;
  return (
    <NavigationContainer>
      {IsLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
