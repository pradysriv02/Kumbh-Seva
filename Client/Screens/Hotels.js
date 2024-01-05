import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
const Hotels = () => {
  const hotelInfo = require("../jsondatafiles/hoteldata.json");
  const getImage = (image) => {
    switch (image) {
      case "../assets/hotels/aman-residency.webp":
        return require("../assets/hotels/aman-residency.webp");
        break;
      case "../assets/hotels/galaxy.webp":
        return require("../assets/hotels/galaxy.webp");
        break;
      case "../assets/hotels/hira-inn.webp":
        return require("../assets/hotels/hira-inn.webp");
        break;
      case "../assets/hotels/le-leisure.webp":
        return require("../assets/hotels/le-leisure.webp");
        break;
      case "../assets/hotels/max.webp":
        return require("../assets/hotels/max.webp");
        break;
      case "../assets/hotels/oyo.jpg":
        return require("../assets/hotels/oyo.jpg");
        break;
      case "../assets/hotels/ravisha-continental.webp":
        return require("../assets/hotels/ravisha-continental.webp");
        break;
      case "../assets/hotels/shree-kanha.webp":
        return require("../assets/hotels/shree-kanha.webp");
        break;
      case "../assets/hotels/vitthal.webp":
        return require("../assets/hotels/vitthal.webp");
        break;
      case "../assets/hotels/welcome-heritage.webp":
        return require("../assets/hotels/welcome-heritage.webp");
        break;
      case "../assets/hotels/kanha-shyam.webp":
        return require("../assets/hotels/kanha-shyam.webp");
        break;
    }
  };
  const stars = (length) => {
    let starArray = [];
    for (var i = 1; i <= length; i++) {
      starArray.push(<Ionicons name="star" size={10} color={"#00ced1"} />);
    }
    return starArray;
  };
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(hotelInfo);
  const [search, setSearch] = useState(null);
  const onSearch = (text) => {
    if (text === "") {
      setInfo(hotelInfo);
    } else {
      let temp = info.filter(
        (item) => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
      setInfo(temp);
    }
  };
  const scrollY = React.useRef(new Animated.Value(0)).current;
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
            Hotels
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
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"#f5f5f5"}
            style={styles.searchBar}
            onChangeText={(text) => {
              onSearch(text);
              setSearch(text);
            }}>
            {search}
          </TextInput>
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
          const inputRange = [-1, 0, 180 * index, 180 * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animatable.View
              animation={"fadeInUp"}
              duration={1000}
              delay={index * 300}>
              <Animated.View style={[styles.cards, { transform: [{ scale }] }]}>
                <Image source={getImage(item.image)} style={styles.image} />
                <View style={styles.cardText}>
                  <Text style={{ fontSize: 25, marginBottom: 5 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    {stars(item.stars)}
                  </Text>
                  <Text style={{ fontSize: 15, marginBottom: 5 }}>
                    3 BHK, 2 BHK, Suite, Coupe
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>
                      Rs.{item.price}
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
              height: 250,
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
              onPress={() => {
                setInfo(info.sort((a, b) => a.price - b.price));
              }}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                Low to High: Price
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
              onPress={() => {
                setInfo(info.sort((a, b) => b.price - a.price));
              }}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                High to Low: Price
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
              onPress={() => {
                setInfo(info.sort((a, b) => a.stars - b.stars));
              }}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                Low to High: Stars
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
              onPress={() => {
                setInfo(info.sort((a, b) => b.stars - a.stars));
              }}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
                High to Low : Stars
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                paddingLeft: 20,
              }}
              onPress={() => {
                setInfo(hotelInfo);
              }}>
              <Text style={{ fontSize: 18, color: "#f5f5f5" }}>All Hotels</Text>
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

export default Hotels;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cards: {
    height: 160,
    width: "99%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: 10,
    marginBottom: 5,
  },
  image: {
    height: "80%",
    width: "35%",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
  },
  cardText: {
    margin: 10,
    flexShrink: 1,
  },
  textInput: {
    height: 200,
    width: "100%",
    alignItems: "flex-start",
    padding: 15,
    paddingBottom: 20,
    backgroundColor: "#00ced1",
    justifyContent: "space-between",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  searchBar: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: "#fff",
  },
});

/*<View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <Image
            source={require("../assets/kanha-shyam.webp")}
            style={styles.image}
          />
          <View style={styles.cardText}>
            <Text style={{ fontSize: 25, marginBottom: 5 }}>Hotel Name</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Stars</Text>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>
              3 BHK, 2 BHK, Suite, Coupe
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Price</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Text> @ All Rights Reserved</Text>
        </View>*/
