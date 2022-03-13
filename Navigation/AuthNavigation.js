import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

const login = () => {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};

const register = () => {
  return (
    <View>
      <Text>Register Screen</Text>
    </View>
  );
};

const AuthNavigation = () => {
  const AuthNavigator = createNativeStackNavigator();
  return (
    <AuthNavigator.Navigator>
      <AuthNavigator.Screen name="Login" component={login} />
      <AuthNavigator.Screen name="Register" component={register} />
    </AuthNavigator.Navigator>
  );
};

export default AuthNavigation;
