import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// creates customised button

function AppButton({ color = "primaryColor", icon, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={[styles.container, { backgroundColor: AppColors[color] }]}>
        {icon && <MaterialCommunityIcons name={icon} size={50} />}
        {title && <AppText style={styles.text}>{title}</AppText>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
  },
  text: {
    textTransform: "uppercase",
    color: AppColors.white,
  },
  touchable: {
    margin: 5,
  },
});

export default AppButton;
