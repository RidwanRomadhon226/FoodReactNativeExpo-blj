import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Input from "../components/Inputs";
import Submit from "../components/Submits";

const SignupScreens = (props) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/signup.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Let's Get </Text>
        <Text style={styles.textBody}>
          Create an account to get all features
        </Text>
        <Input name="Full Name" icon="user" />
        <Input name="Email" icon="envelope" />
        <Input name="Phone" icon="phone" />
        <Input name="Password" icon="lock" pass={true} />
        <Input name="Confirm Password" icon="lock" pass={true} />
        <Submit
          color="#0251ce"
          title="CREATE"
          clidked={() => {
            props.navigation.navigate("container");
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textBody}>Aiready have an account</Text>
          <Text
            style={[styles.textBody, { color: "blue" }]}
            onPress={() => props.navigation.navigate("Loginscreens")}
          >
            Login here
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 30,
  },
  textTitle: {
    fontSize: 50,
    fontFamily: "open-sans",
    marginVertical: 10,
  },
  textBody: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
});
