import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
const Places = () => {
  const placeInfo = require("../jsondatafiles/placedata.json");
  const getImage = (image) => {
    switch (image) {
      case "../assets/places/hanuman-mandir.webp":
        return require("../assets/places/hanuman-mandir.webp");
        break;
      case "../assets/places/sangam.webp":
        return require("../assets/places/sangam.webp");
        break;
      case "../assets/places/allahabad-fort1.webp":
        return require("../assets/places/allahabad-fort1.webp");
        break;
      case "../assets/places/ashok-pillor.webp":
        return require("../assets/places/ashok-pillor.webp");
        break;
      case "../assets/places/shankar-viman-mandapam.webp":
        return require("../assets/places/shankar-viman-mandapam.webp");
        break;
      case "../assets/places/patalpuri-temple.webp":
        return require("../assets/places/patalpuri-temple.webp");
        break;
      case "../assets/places/minto-park.webp":
        return require("../assets/places/minto-park.webp");
        break;
      case "../assets/places/mankameshwar-temple.webp":
        return require("../assets/places/mankameshwar-temple.webp");
        break;
      case "../assets/places/ganga-gallery.webp":
        return require("../assets/places/ganga-gallery.webp");
        break;
      case "../assets/places/swaraj-bhawan-1.webp":
        return require("../assets/places/swaraj-bhawan-1.webp");
        break;
      case "../assets/places/anand-bhawan.webp":
        return require("../assets/places/anand-bhawan.webp");
        break;
      case "../assets/places/allahabad-university.webp":
        return require("../assets/places/allahabad-university.webp");
        break;
    }
  };
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}>
      <ImageBackground source={require("../assets/menu-bg-pic.jpg")}>
        <View
          style={{
            height: "100%",
            justifyContent: "flex-end",
          }}>
          <View style={{ height: "30%", padding: 30 }}>
            <Text
              style={{
                fontSize: 45,
                lineHeight: 60,
                fontWeight: "600",
                padding: 5,
                color: "#808080",
              }}>
              Places You Would Want to Explore............
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: "70%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 10,
            }}>
            <Animated.FlatList
              data={placeInfo}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item, index }) => {
                const inputRange = [-1, 0, 230 * index, (index + 2) * 230];
                const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0],
                });
                return (
                  <Animatable.View
                    animation={"fadeInLeft"}
                    duration={1000}
                    delay={index * 200}>
                    <Animated.View
                      style={[styles.cards, { transform: [{ scale }] }]}>
                      <Image
                        source={getImage(item.image)}
                        style={styles.image}
                      />
                      <View style={{ flexShrink: 1 }}>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: "700",
                            color: "#2f4f4f",
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            lineHeight: 20,
                            marginTop: 5,
                            color: "#2f4f4f",
                          }}>
                          {item.description}
                        </Text>
                      </View>
                    </Animated.View>
                  </Animatable.View>
                );
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#00ced1",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "500",
  },
  cards: {
    flex: 1,
    padding: 10,
    height: 200,
    marginVertical: 10,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f5f5f5",
  },
  image: {
    height: "100%",
    width: "40%",
    borderRadius: 10,
    paddingBottom: 5,
  },
});
