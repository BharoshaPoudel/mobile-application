import React from "react";
import { StyleSheet, View } from "react-native";

import AccountScreen from "./app/screens/AccountScreen";

import MyListingScreen from "./app/screens/MyListingScreen";
import NewListingScreen from "./app/screens/NewListingScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
