import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const Food = () => {
  const foodInfo = require("../jsondatafiles/fooddata.json");
  const getImage = (image) => {
    switch (image) {
      case "../assets/foods/elchico.jpeg":
        return require("../assets/foods/elchico.jpeg");
        break;
      case "../assets/foods/tamarind-tree.jpg":
        return require("../assets/foods/tamarind-tree.jpg");
        break;
      case "../assets/foods/eat-on.webp":
        return require("../assets/foods/eat-on.webp");
        break;
      case "../assets/foods/eden.jpg":
        return require("../assets/foods/eden.jpg");
        break;
      case "../assets/foods/aryans.jpg":
        return require("../assets/foods/aryans.jpg");
        break;
      case "../assets/foods/coffee.jpg":
        return require("../assets/foods/coffee.jpg");
        break;
      case "../assets/foods/hudson.jpg":
        return require("../assets/foods/hudson.jpg");
        break;
      case "../assets/foods/netram.jpg":
        return require("../assets/foods/netram.jpg");
        break;
      case "../assets/foods/paradise.jpg":
        return require("../assets/foods/paradise.jpg");
        break;
      case "../assets/foods/park-view.jpg":
        return require("../assets/foods/park-view.jpg");
        break;
    }
  };
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(foodInfo);
  const onlyVegItems = () => {
    const onlyVeg = info.filter((item) => item.type === "Veg");
    setInfo(onlyVeg);
  };
  const onlyNonVegItems = () => {
    const onlyNonVeg = info.filter((item) => item.type === "NonVeg");
    setInfo(onlyNonVeg);
  };
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const stars = (length) => {
    let starArray = [];
    for (var i = 1; i <= length; i++) {
      starArray.push(<Ionicons name="star" size={15} color={"#00ced1"} />);
    }
    return starArray;
  };
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.textInput}>
        <View style={{ height: "82%" }}>
          <Text
            style={{
              fontSize: 40,

              padding: 10,
              color: "#f5f5f5",
              fontWeight: "500",
            }}>
            Restaurants
          </Text>
          <Text
            style={{
              fontSize: 30,
              paddingHorizontal: 10,
              fontWeight: "500",
              color: "#f5f5f5",
            }}>
            You can Check Out.....
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}>
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            placeholderTextColor={"#f5f5f5"}></TextInput>
          <Ionicons
            name="filter-outline"
            size={32}
            style={{ color: "#fff" }}
            onPress={() => setModal(true)}
          />
        </View>
      </View>
      <Animated.FlatList
        data={info}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, 230 * index, 230 * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animatable.View
              style={styles.container}
              animation={"fadeInUp"}
              duration={1000}
              delay={index * 300}>
              <Animated.View style={[styles.cards, { transform: [{ scale }] }]}>
                <Image source={getImage(item.image)} style={styles.image} />
                <View
                  style={{
                    flexShrink: 1,
                    marginHorizontal: 12,
                    paddingVertical: 15,
                    paddingHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "500",
                      marginTop: -10,
                    }}>
                    {item.name}
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "400",
                        marginVertical: 8,
                      }}>
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "300",
                        lineHeight: 20,
                      }}>
                      {item.address}
                    </Text>
                    <Text style={{ marginVertical: 10 }}>
                      {stars(item.stars)}
                    </Text>
                  </View>
                </View>
              </Animated.View>
            </Animatable.View>
          );
        }}
      />
      <Modal transparent={true} visible={modal}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onPress={() => setModal(false)}>
          <View
            style={{
              width: "80%",
              height: 150,
              backgroundColor: "#00ced1",
              borderRadius: 20,
            }}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                paddingLeft: 20,
                borderBottomWidth: 0.5,
                borderColor: "#f5f5f5",
              }}
              onPress={onlyVegItems}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                Veg Restaurants
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                paddingLeft: 20,
                borderBottomWidth: 0.5,
                borderColor: "#f5f5f5",
              }}
              onPress={onlyNonVegItems}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                Non-Veg Restaurants
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                paddingLeft: 20,
              }}
              onPress={() => setInfo(foodInfo)}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                All Restaurants
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text> @ All Rights Reserved </Text>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    height: 200,
    width: "98%",
    flexDirection: "row",
    marginVertical: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "40%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textInput: {
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#00ced1",
    padding: 15,
    paddingBottom: 25,
  },
  searchBar: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: "#fff",
  },
});
