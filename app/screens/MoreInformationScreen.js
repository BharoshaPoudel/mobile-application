import React, { useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppInfo from "../components/AppInfo";
import MyListingScreen from "../screens/MyListingScreen";
import DataManager from "../config/DataManager";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const getListing = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getListing(user);
};

function MoreInformationScreen(props) {
  const MyList = getListing();
  console.log(MyList);

  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText style={styles.header}>
          <MaterialCommunityIcons
            name="map-search"
            size={30}
            color={AppColors.logo}
          />{" "}
          PEEK & G
          <MaterialCommunityIcons
            name="map-marker-circle"
            size={30}
            color={AppColors.primary}
          />
        </AppText>
      </View>
      <FlatList
        data={MyList}
        keyExtractor={(listing) => listing.listingId.toString()}
        renderItem={({ item }) => (
          <AppInfo
            title={item.title}
            overview={item.overview}
            image={item.image}
            category={item.category}
            description={item.description}
            address={item.address}
            review={item.review}
          />
        )}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
    marginTop: 0,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },
});

export default MoreInformationScreen;
