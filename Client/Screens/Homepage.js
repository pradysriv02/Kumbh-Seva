import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";

const Homepage = () => {
  const name = useSelector((state) => state.reducer.userName);

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/about-pic.jpg")}>
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
          }}>
          <Animatable.View
            style={{ padding: 25 }}
            animation={"fadeInLeft"}
            duration={1000}
            delay={200}>
            <Text style={{ fontSize: 40, color: "#f5f5f5" }}>
              Visit Kumbh....
            </Text>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 20,
                marginTop: 10,
                color: "#f5f5f5",
              }}>
              Embark on an ethereal journey at the Kumbh Mela, India's
              mesmerizing spiritual extravaganza. Amidst the confluence of
              sacred rivers, immerse in a sea of devotion, witnessing millions
              gather for profound rituals and spiritual blessings. Engage in
              vibrant ceremonies, soulful hymns, and revered saints' discourses.
              Traverse bustling bazaars, savoring local delicacies and vibrant
              crafts. A kaleidoscope of faith and tradition awaits, offering a
              once-in-a-lifetime experience of spiritual awakening and cultural
              immersion.
            </Text>
          </Animatable.View>
          <Animatable.View
            style={{
              backgroundColor: "#f5f5f5",
              height: "60%",
              width: "100%",
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              padding: 25,
            }}
            animation={"fadeInRight"}
            duration={1000}
            delay={200}>
            <Text style={{ fontSize: 40 }}>Hi,</Text>
            <Text style={{ fontSize: 40 }}>{name}</Text>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 20,
                marginTop: 10,
              }}>
              A travel app dedicated to the Kumbh Mela would be a holistic
              guide, offering a seamless journey through this spiritual
              extravaganza. It would feature detailed event schedules,
              facilitating access to rituals, talks by spiritual leaders, and
              cultural programs. Real-time updates on crowd densities,
              transportation options, and weather forecasts would aid planning.
              Interactive maps would navigate the sprawling festival grounds,
              guiding users to specific venues and amenities. Additionally,
              language translation tools, safety alerts, and local accommodation
              suggestions would ensure a comprehensive and enriching pilgrimage
              experience for users.
            </Text>
          </Animatable.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afeeee",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "500",
  },
  image: {
    height: "40%",
    width: "90%",
    borderRadius: 10,
  },
  textContent: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: "300",
    lineHeight: 22,
  },
});
