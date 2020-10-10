import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HeaderButton from "../components/HeaderButton";
import Color from "../constans/Color";

const MealsDetailScreen = () => {
  return (
    <View>
      <Text>MealsDetailScreen</Text>
    </View>
  );
};

export const MealsDetailOption = (navData) => {
  return {
    headerTitle: "MealsDetail Screen",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerbackTitleStyle: {
      fontFamily: "open-sans",
    },
  };
};

export default MealsDetailScreen;

const styles = StyleSheet.create({});
