//navigation for tab provided in the account screen.

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import AccountScreen from "../screens/AccountScreen";
import MyListingScreen from "../screens/MyListingScreen";
import NewListingScreen from "../screens/NewListingScreen";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import HomeNavigator from "./HomeNavigator";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MoreInformationScreen from "../screens/MoreInformationScreen";
import SearchListScreen from "../screens/SearchListScreen";
const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: AppColors.otherColor,
      activeBackgroundColor: AppColors.primaryColor,
    }}
  >
    <AppTab.Screen
      name="Account"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="home"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />

    <AppTab.Screen
      name="Add New"
      component={NewListingScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="plus-circle"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />

    <AppTab.Screen
      name="My Listing"
      component={MyListingScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="book-open-variant"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />

    <AppTab.Screen
      name="Search"
      component={SearchListScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="book-open-variant"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />

    <AppTab.Screen
      name="Details"
      component={MoreInformationScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="book-open-variant"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
