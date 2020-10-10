import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HeaderButton from "../components/HeaderButton";
import Color from "../constans/Color";

const ProfileScreen = (props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export const ProfileScreenOption = (navData) => {
  return {
    headerTitle: "Profile Screen",
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
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerbackTitleStyle: {
      fontFamily: "open-sans",
    },
  };
};

export default ProfileScreen;

const styles = StyleSheet.create({});
