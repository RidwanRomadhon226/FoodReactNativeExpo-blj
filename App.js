import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { useState } from "react";
import Navigation from "./navigations/FoodNavigation";

enableScreens();

const featchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontloaded, setFontLoaded] = useState(false);
  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={featchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});
