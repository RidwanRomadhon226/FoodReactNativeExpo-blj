import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Inputs from "../components/Inputs";
import Submits from "../components/Submits";

const Loginscreens = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/login.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: 20 }} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <Submits
          title="LOG IN"
          color="#0148a4"
          clidked={() => {
            console.log("ini adalah Login");
          }}
        />
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't Have an account</Text>
          <Text
            style={[styles.textBody, { color: "blue" }]}
            onPress={() => console.log("Ini adalag Sign up")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Loginscreens;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 40,
    fontFamily: "open-sans",
    marginVertical: 10,
  },
  textBody: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
});
