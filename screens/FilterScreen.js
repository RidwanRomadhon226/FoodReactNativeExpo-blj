import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Color from "../constans/Color";
import HeaderButton from "../components/HeaderButton";
import { DrawerActions } from "@react-navigation/native";

const FilterScreen = (props) => {
  return (
    <View>
      <Text>FilterScreen</Text>
    </View>
  );
};

export const FilterScreenOption = (navData) => {
  return {
    headerTitle: "Filter Screen",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.dispatch(DrawerActions.openDrawer());
            }}
            color="white"
          />
        </HeaderButtons>
      );
    },
  };
};

export default FilterScreen;

const styles = StyleSheet.create({});
