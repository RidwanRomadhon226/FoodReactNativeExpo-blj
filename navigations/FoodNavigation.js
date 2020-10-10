import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Loginscreens from "../screens/Loginscreens";
import SignupScreens from "../screens/SignupScreens";
import FoodCategoryScreen, {
  FoodScreenOptions,
} from "../screens/FoodCategoryScreen";
import { Button, SafeAreaView, View } from "react-native";
import Color from "../constans/Color";
import ProfileScreen, { ProfileScreenOption } from "../screens/ProfileScreen";
import FilterScreen, { FilterScreenOption } from "../screens/FilterScreen";
import FavoriteScreen, {
  FavoriteScreenOptions,
} from "../screens/FavoriteScreen";
import MealsDetailScreen, {
  MealsDetailOption,
} from "../screens/MealsDetailScreen";

const LoginStack = createStackNavigator();

const NavigationLogin = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Loginscreens" component={Loginscreens} />
      <LoginStack.Screen name="SignupScreens" component={SignupScreens} />
      <LoginStack.Screen name="container" component={MealsFavTabNavigator} />
    </LoginStack.Navigator>
  );
};

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FoodCategoryScreen"
        component={FoodCategoryScreen}
        options={FoodScreenOptions}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealsDetailScreen}
        options={MealsDetailOption}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profiles"
        component={ProfileScreen}
        options={ProfileScreenOption}
      />
    </ProfileStack.Navigator>
  );
};

const FilterStack = createStackNavigator();
const filterNavigations = () => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen
        name="FilterStack"
        component={FilterScreen}
        options={FilterScreenOption}
      />
    </FilterStack.Navigator>
  );
};

const StackFavotites = createStackNavigator();
const FavNavigator = () => {
  return (
    <StackFavotites.Navigator>
      <StackFavotites.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={FavoriteScreenOptions}
      />
      <StackFavotites.Screen
        name="MealDetailScreen"
        component={MealsDetailScreen}
      />
    </StackFavotites.Navigator>
  );
};
//end stack

const Tab = createBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeColor: Color.accentColor,
        activeColor: "red",
        barStyle: {
          backgroundColor: Color.primaryColor,
          backgroundColor: "red",
        },
      }}
    >
      <Tab.Screen
        name="Categori Food"
        component={MainNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={25}
                color={Color.primaryColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Food Favorite"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-star" size={25} color={Color.primaryColor} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Color.primary}
                color="red"
                onPress={() => {
                  props.navigation.navigate("LoginScreen");
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="Food Categori"
        component={Navigations}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-pizza" : "ios-pizza"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Filter"
        component={filterNavigations}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={
                Platform.OS === "android"
                  ? "md-color-filter"
                  : "ios-color-filter"
              }
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          drawerIcon: (props) => (
            <Feather name="user-check" size={23} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
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
