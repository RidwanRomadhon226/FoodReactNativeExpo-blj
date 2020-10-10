import React from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Color from "../constans/Color";
import { DrawerActions } from "@react-navigation/native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriGridTile from "../components/CategoriGridTile";

const FoodCategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoriGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate("MealDetailScreen");
        }}
        image={itemData.item.urlImage}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );

  return (
    <View>
      <Text>FoodCategoryScreen</Text>
    </View>
  );
};

export const FoodScreenOptions = (navData) => {
  return {
    headerTitle: "Food Categori",
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

export default FoodCategoryScreen;

const styles = StyleSheet.create({});
