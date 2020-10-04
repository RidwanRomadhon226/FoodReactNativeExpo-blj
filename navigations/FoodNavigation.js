import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loginscreens from "../screens/Loginscreens";

const LoginStack = createStackNavigator();
const NavigationLogin = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Loginscreens" component={Loginscreens} />
    </LoginStack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <NavigationLogin />
    </NavigationContainer>
  );
};

export default Navigator;
