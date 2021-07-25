//the travel screen to search based on the catergories.

import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "../components/AppPicker";
import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";

const getCategoryListing = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getListing(user);
};

const categories = [
  {
    label: "Play",
    value: 1,
    icon: "airballoon-outline",
    backgroundColor: "maroon",
  },
  { label: "Eat", value: 2, icon: "food", backgroundColor: "blue" },
  { label: "Sleep", value: 3, icon: "bed", backgroundColor: "purple" },
];

function SearchListScreen(props) {
  const MyList = getCategoryListing();
  const [category, setCategory] = useState("");
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
      <View>
        <AppPicker
          color={AppColors.purple}
          style={styles.picker}
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          data={categories}
          icon="apps"
          placeholder="Categories"
          numColumns={3}
        />
      </View>
      <FlatList
        data={
          category !== ""
            ? MyList.filter((value) => value.catergory === category.label)
            : MyList
        }
        keyExtractor={(listing) => listing.listingId.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={item.overview}
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
    backgroundColor: AppColors.bright,
    flex: 1,
    marginTop: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 25,
  },
});

export default SearchListScreen;
