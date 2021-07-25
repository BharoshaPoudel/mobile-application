//new user registration

import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import AppPicker from "../components/AppPicker";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import LoginScreen from "./LoginScreen";

function RegisterScreen({ navigation }) {
  const [userName, setUserName] = useState();
  const [country, setCountry] = useState();
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
      <View style={styles.Image}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={openImagePickerAsync}
        >
          <AppIcon
            name="camera"
            size={30}
            iconColor={AppColors.icon}
            backgroundColor={AppColors.primaryColor}
          />

          {image && (
            <Image
              source={{ uri: image.path }}
              style={{ height: 20, width: 20, marginLeft: 100 }}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.textInputContainer}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Full Name"
          textContentType="emailAddress"
          onChangeText={(userInputName) => setUserName(userInputName)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email Address"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(userInputEmail) => setEmail(userInputEmail)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Country"
          textContentType="emailAddress"
          onChangeText={(userInputName) => setCountry(userInputName)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onChangeText={(userInputPassword) => setPassword(userInputPassword)}
        />
      </View>

      <AppButton
        onPress={() => navigation.navigate("Welcome")}
        title="Register"
      >
        {" "}
      </AppButton>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  ProfileImage: {
    alignItems: "center",
    flex: 1,
  },
  Image: {
    flex: 1,
    flexDirection: "row",
  },
  behavior: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: AppColors.otherColorLite,
    flex: 1,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default RegisterScreen;
