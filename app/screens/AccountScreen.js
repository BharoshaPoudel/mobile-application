//main account screen.

import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import { FlatList } from "react-native-gesture-handler";
import AppCard from "../components/AppCard";
import AppPicker from "../components/AppPicker";

const getListing = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getListing(user);
};

const location = [
  {
    label: "Pokhara",
    value: 1,
  },
];

function AccountScreen({ navigation, route }) {
  const MyList = getListing();
  console.log(MyList);
  return (
    <AppScreen style={styles.container}>
      <View style={styles.pickerst}>
        <AppPicker
          color={AppColors.purple}
          style={styles.picker}
          data={location}
          icon="apps"
          placeholder="location"
        />
      </View>

      <View style={styles.header}>
        <MaterialCommunityIcons
          name="map-search"
          size={50}
          color={AppColors.logo}
        />
      </View>
      <View style={styles.header}>
        <AppText style={styles.header}>
          PEEK & G
          <MaterialCommunityIcons
            name="map-marker-circle"
            size={30}
            color={AppColors.primary}
          />
        </AppText>
      </View>
      <View style={styles.profileContainer}>
        <AppListItem
          image={route.params.paramImage}
          title={route.params.paramName}
          overview={route.params.paramEmail}
        />

        <FlatList
          data={MyList}
          keyExtractor={(listing) => listing.listingId.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={item.overview}
              image={item.image}
              category={item.category}
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <AppButton
          onPress={() => navigation.navigate("Welcome")}
          title="logout"
        >
          {" "}
        </AppButton>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    backgroundColor: AppColors.otherColor,
    marginTop: 0,
    flex: 1,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profileContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
    height: 120,
    backgroundColor: AppColors.otherColorLite,
    justifyContent: "center",
    borderRadius: 10,
  },
  linksContainer: {
    marginVertical: 75,
    backgroundColor: AppColors.otherColorLite,
    height: 150,
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  logout: {
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
  },
  pickerst: {
    marginTop: 30,
  },
});
export default AccountScreen;
