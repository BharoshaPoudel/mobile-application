//display existing listing of a user

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";
import AppButton from "../components/AppButton";
import AuthNavi from "../navigation/AuthNavigator";
import HomeNavi from "../navigation/HomeNavigator";
import { color } from "react-native-reanimated";

const getListing = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getListing(user);
};

function MyListingScreen(props) {
  const MyList = getListing();
  console.log(props);

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
          <AppCard
            title={item.title}
            overview={item.overview}
            image={item.image}
            category={item.category}
            onPress={() => props.navigation.navigate("MoreInfo")}
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
    color: AppColors.black,
  },
});

export default MyListingScreen;
