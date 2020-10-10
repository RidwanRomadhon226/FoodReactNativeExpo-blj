import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constans/Color";

const FavoriteScreen = (props) => {
  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export const FavoriteScreenOptions = (navData) => {
  return {
    headerTitle: "Favorite Screen",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerLeft: null,
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans",
    },
  };
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
