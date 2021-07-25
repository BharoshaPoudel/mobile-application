import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import AppButton from "./AppButton";

function AppCard({ category, title, overview, image, onPress }) {
  return (
    <View style={styles.container}>
      {isFinite(image) ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <AppText style={styles.title}> {title} </AppText>
      <AppText style={styles.subtitle}> {overview} </AppText>
      <AppText style={styles.subtitle}> {category} </AppText>
      <AppButton
        style={styles.button}
        onPress={() => onPress()}
        title="More Information"
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColorLite,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 25,
    marginRight: 20,
    marginTop: 30,
    marginLeft: 20,
    borderColor: AppColors.black,
    borderWidth: 1,
    flex: 1,
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    textAlign: "left",
  },
  subtitle: {
    flex: 1,
    fontSize: 10,
    textAlign: "right",
  },
});

export default AppCard;
