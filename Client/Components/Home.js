import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import Homepage from "../Screens/Homepage";
import Places from "../Screens/Places";
import Food from "../Screens/Food";
import Guide from "../Screens/Guide";
import Hotels from "../Screens/Hotels";
import Customdrawer from "./Customdrawer";
const Home = (prop) => {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator
      drawerContent={(props) => <Customdrawer {...{ props, prop }} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#00ced1",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
        headerStyle: {
          backgroundColor: "#f5f5f5",
        },
      }}>
      <drawer.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#6495ed" },

          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <drawer.Screen
        name="Places"
        component={Places}
        options={{
          headerStyle: { backgroundColor: "#e0ffff" },

          drawerIcon: ({ color }) => (
            <Ionicons name="location-outline" size={22} color={color} />
          ),
        }}
      />
      <drawer.Screen
        name="Food"
        component={Food}
        options={{
          headerStyle: { backgroundColor: "#00ced1" },
          headerTitleStyle: { color: "#f5f5f5" },
          drawerIcon: ({ color }) => (
            <Ionicons name="fast-food-outline" size={22} color={color} />
          ),
        }}
      />
      <drawer.Screen
        name="Hotels"
        component={Hotels}
        options={{
          headerStyle: { backgroundColor: "#00ced1" },
          headerTitleStyle: { color: "#f5f5f5" },
          drawerIcon: ({ color }) => (
            <Ionicons name="bed-outline" size={22} color={color} />
          ),
        }}
      />
      <drawer.Screen
        name="Guide"
        component={Guide}
        options={{
          headerStyle: { backgroundColor: "#00ced1" },
          headerTitleStyle: { color: "#f5f5f5" },
          drawerIcon: ({ color }) => (
            <Ionicons name="man-outline" size={22} color={color} />
          ),
        }}
      />
    </drawer.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 30,
  },
});
