import React from "react";

import { Text, StyleSheet, Platform } from "react-native";

function AppText({ style, children }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir-Roman",
    textAlign: "center",
    padding: 1,
  },
});

export default AppText;
