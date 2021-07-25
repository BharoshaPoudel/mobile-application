//first screen

import React from "react";
import { View, StyleSheet, ImageBackground, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/ud.jpg")}
        style={styles.background}
        //blurRadius={blurRadiusValue}
      >
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="map-search"
            size={80}
            color={AppColors.logo}
          />
        </View>
        <AppText style={styles.header}>
          PEEK & G
          <MaterialCommunityIcons
            name="map-marker-circle"
            size={60}
            color={AppColors.primary}
          />
        </AppText>
        <AppText style={styles.NormalText}> Let's Get Started</AppText>
        <View style={styles.ButtonStyle}>
          <AppButton
            onPress={() => navigation.navigate("Login")}
            title="Login"
          />
          <AppButton
            onPress={() => navigation.navigate("Register")}
            title="Register"
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    resizeMode: "center",
  },
  ButtonStyle: {
    marginBottom: 110,
    marginTop: 20,
    paddingHorizontal: 70,
    width: "100%",
  },
  header: {
    fontSize: 55,
    fontWeight: "bold",
    marginBottom: 100,
    color: AppColors.header,
    marginLeft: 1,
    marginRight: 1,
  },
  Icon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  NormalText: {
    fontSize: 24,
  },
});
export default WelcomeScreen;
