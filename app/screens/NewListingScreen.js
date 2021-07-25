//form to add new listing which is saved in dataManager

import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import * as ImagePicker from "expo-image-picker";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import { ScrollView } from "react-native-gesture-handler";

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

function NewListingScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [overview, setOverView] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");

  const [titleError, setTitleError] = useState("");
  const [overviewError, setOverViewError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [reviewError, setReviewError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ path: pickerResult.uri });
    console.log(pickerResult);
  };

  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
    setOverViewError(overview.length > 0 ? "" : "Please set a valid subtitle");
    setCategoryError(category ? "" : "Please pick a category from the list");
    setImageError(image ? "" : "Please pick an image");
    setDescriptionError(description.length > 0 ? "" : "add info");
    setReviewError(review.length > 0 ? "" : "add info");
    setAddressError(address.length > 0 ? "" : "add address");
    return title.length > 0 && overview.length > 0 && category && image
      ? true
      : false;
  };

  const addListing = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const listings = commonData.getListing(user);
    const listingId = listings.length + 1;
    const newListing = {
      title: title,
      overview: overview,
      category: category.label,
      listingId: listingId,
      userid: user,
      image: image.path,
    };

    console.log(newListing);
    commonData.addListing(newListing);
  };

  return (
    <AppScreen style={styles.background}>
      <ScrollView style={styles.scrollview}>
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
        <AppText style={styles.subtitle}>Add Name</AppText>
        <AppTextInput
          icon="book-open-page-variant"
          placeholder="Name"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />

        {titleError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {titleError}
          </AppText>
        ) : (
          <></>
        )}
        <AppText style={styles.subtitle}>Add Overview</AppText>
        <AppTextInput
          icon="calendar-month"
          placeholder="Overview"
          value={overview}
          onChangeText={(inputText) => setOverView(inputText)}
        />

        {overviewError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {overviewError}
          </AppText>
        ) : (
          <></>
        )}
        <AppText style={styles.subtitle}>Add Category</AppText>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          data={categories}
          icon="apps"
          placeholder="Categories"
          numColumns={3}
        />

        {categoryError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {categoryError}
          </AppText>
        ) : (
          <></>
        )}

        <AppText style={styles.subtitle}>Add Description</AppText>
        <AppTextInput
          icon="book-open-page-variant"
          placeholder="Description"
          value={description}
          onChangeText={(inputText) => setDescription(inputText)}
        />

        {descriptionError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {descriptionError}
          </AppText>
        ) : (
          <></>
        )}
        <AppText style={styles.subtitle}>Add Address</AppText>
        <AppTextInput
          icon="map-marker"
          placeholder="address"
          value={address}
          onChangeText={(inputText) => setAddress(inputText)}
        />

        {addressError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {addressError}
          </AppText>
        ) : (
          <></>
        )}
        <AppText style={styles.subtitle}>Add Review</AppText>
        <AppTextInput
          icon="comment-quote"
          placeholder="Review"
          value={review}
          onChangeText={(inputText) => setReview(inputText)}
        />

        {reviewError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {reviewError}
          </AppText>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={styles.imageButton}
          onPress={openImagePickerAsync}
        >
          <AppIcon
            name="camera"
            size={30}
            iconColor={AppColors.otherColor}
            backgroundColor={AppColors.primaryColor}
          />
          <AppText style={styles.subtitle}>Add picture</AppText>
          {image && (
            <Image
              source={{ uri: image.path }}
              style={{ height: 80, width: 80, marginLeft: 20 }}
              title="Add picture"
            />
          )}
        </TouchableOpacity>
        {imageError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {imageError}
          </AppText>
        ) : (
          <></>
        )}

        <AppButton
          title="Add New Listing"
          onPress={() => {
            if (doErrorCheck()) {
              addListing();
              navigation.navigate("MyListing");
            }
          }}
        />
      </ScrollView>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  imageButton: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
  scrollview: {
    margin: 5,
  },
  subtitle: {
    fontSize: 15,
    paddingLeft: 10,
    marginBottom: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },
});

export default NewListingScreen;
