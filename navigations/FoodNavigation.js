import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loginscreens from "../screens/Loginscreens";
import SignupScreens from "../screens/SignupScreens";
import FoodCategoryScreen from "../screens/FoodCategoryScreen";

const LoginStack = createStackNavigator();

const NavigationLogin = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Loginscreens" component={Loginscreens} />
      <LoginStack.Screen name="SignupScreens" component={SignupScreens} />
      <LoginStack.Screen name="container" component={Navigations} />
    </LoginStack.Navigator>
  );
};

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FoodCategoryScreen" component={FoodCategoryScreen} />
    </Stack.Navigator>
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
