import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-animatable";

const Booking = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.booking}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Booking details
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Total Amount paid:{" "}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Rs.4500</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Total Duration**:{" "}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>8 Hours</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            **Time duration is in reference with the time at which the guide
            confirms the booking
          </Text>
        </View>
      </View>
      <View style={styles.guide}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Guide details</Text>
        </View>
        <View style={{ margin: 5, flexDirection: "row" }}>
          <View style={{ paddingHorizontal: 5 }}>
            <Image
              source={require("../assets/about-pic.jpg")}
              style={{ height: 80, width: 80, borderRadius: 50, marginLeft: 5 }}
            />
          </View>
          <View
            style={{
              width: 150,
              justifyContent: "center",
              marginVertical: 5,
              marginLeft: 5,
            }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>John Doe</Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              +91 9898787858
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 5, padding: 5 }}>
          <Text style={{ fontSize: 18 }}>About Me:</Text>
          <Text style={{ fontSize: 15, lineHeight: 20 }}>
            Meet our seasoned Kumbh Mela guide, a beacon of cultural immersion.
            With an encyclopedic knowledge of this spiritual pilgrimage, they
            effortlessly unveil the tapestry of rituals, history, and
            traditions. Their animated narratives transport pilgrims into the
            vibrant heart of the Kumbh, elucidating the significance of sacred
            dips in the Ganges.
          </Text>
        </View>
      </View>
      <View style={styles.booking}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Booking References
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Booking Id:</Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Rs.4500</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Customer Name:
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>John Doe</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}></View>
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  booking: {
    height: "25%",
    width: "100%",
  },
  header: {
    alignItems: "center",
    paddingVertical: 5,
  },
  guide: {
    height: "45%",
    marginVertical: 10,
  },
});
