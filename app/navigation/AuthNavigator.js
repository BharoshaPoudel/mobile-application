//navigation system change screen from loging in, entering the application and registering as a new user.

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AccountScreen from "../screens/AccountScreen";
import TabNavigator from "./TabNavigator";
import MyListingScreen from "../screens/MyListingScreen";

import MoreInformationScreen from "../screens/MoreInformationScreen";
import NewListingScreen from "../screens/NewListingScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Login Screen" }}
    />
    <AppStack.Screen name="Register" component={RegisterScreen} />
    <AppStack.Screen
      name="Account"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="MoreInfo" component={MoreInformationScreen} />
    <AppStack.Screen name="MyListing" component={MyListingScreen} />
  </AppStack.Navigator>
);

export default AuthNavigator;
