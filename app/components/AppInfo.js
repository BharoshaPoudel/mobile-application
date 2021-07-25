import React from "react";

import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppColors from "../config/AppColors";

//Detailed information on listing.

function AppInfo({
  category,
  title,
  overview,
  image,
  description,
  address,
  review,
}) {
  return (
    <View style={styles.container}>
      {isFinite(image) ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <AppText style={styles.title}> {"Title: "}</AppText>
      <AppText style={styles.subtitle}>{title} </AppText>
      <AppText style={styles.title}> {"Overview: "}</AppText>
      <AppText style={styles.subtitle}>{overview} </AppText>
      <AppText style={styles.title}> {"Category: "}</AppText>
      <AppText style={styles.subtitle}>{category} </AppText>
      <AppText style={styles.title}>{"Description: "}</AppText>
      <AppText style={styles.subtitle}>{description}</AppText>
      <AppText style={styles.title}>{"Address: "}</AppText>
      <AppText style={styles.subtitle}>{address} </AppText>
      <AppText style={styles.title}>{"Review: "}</AppText>
      <AppText style={styles.subtitle}>{review}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColorLite,
    borderRadius: 20,

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
    fontSize: 17,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "right",
  },
});

export default AppInfo;
