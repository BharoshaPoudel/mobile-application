//navigation to navigate through the users account profile.

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MyListingScreen from "../screens/MyListingScreen";
import AccountScreen from "../screens/AccountScreen";
import MoreInformationScreen from "../screens/MoreInformationScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator mode="modal">
    <AppStack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="MyListing" component={MyListingScreen} />

    <AppStack.Screen name="MoreInfo" component={MoreInformationScreen} />
  </AppStack.Navigator>
);

export default AuthNavigator;
