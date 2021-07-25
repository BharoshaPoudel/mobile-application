import React from "react";
import { View, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";

function AppScreen({ children, style }) {
  return <View style={[styles.ScreenStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  ScreenStyle: {
    flex: 1,
    color: AppColors.primaryColor,
  },
});

export default AppScreen;
