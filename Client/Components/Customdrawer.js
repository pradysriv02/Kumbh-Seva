import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useSelector } from "react-redux";
const Customdrawer = (all) => {
  const props = all.props;
  const prop = all.prop;
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };
  const nameUser = useSelector((state) => state.reducer.userName);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#00ced1" }}>
        <ImageBackground
          source={require("../assets/menu-bg-pic.jpg")}
          style={{ padding: 20 }}>
          <Image
            source={require("../assets/user-icon.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: "500",
            }}>
            {nameUser}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, paddingTop: 10, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => {
            logOut(), prop.navigation.navigate("Login");
          }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Ionicons name="log-out-outline" size={22} />
            <Text style={{ fontSize: 15 }}>Sign Out </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Customdrawer;

const styles = StyleSheet.create({});
