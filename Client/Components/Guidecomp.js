import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
const Guidecomp = (props) => {
  return (
    <View style={styles.container}>
      <Animatable.View
        style={[
          styles.about,
          { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
        ]}
        animation={"fadeInLeft"}
        duration={1000}
        delay={100}>
        <Text style={{ fontSize: 25, fontWeight: "600", color: "#f5f5f5" }}>
          What is a Guide?
        </Text>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 20,
            marginVertical: 10,
            color: "#f5f5f5",
          }}>
          A Kumbh Mela guide is a knowledgeable person well-versed in the
          religious significance, history, and logistics of the massive Hindu
          pilgrimage. They assist visitors, explain rituals, navigate the
          sprawling grounds, and ensure a culturally enriching experience amidst
          the spiritual fervor of the event.
        </Text>
      </Animatable.View>
      <Animatable.View
        style={[styles.about, { backgroundColor: "#f5f5f5" }]}
        animation={"fadeInRight"}
        duration={1000}
        delay={100}>
        <Text style={{ fontSize: 25, fontWeight: "600" }}>
          How to select a suitable Guide?
        </Text>
        <Text style={{ fontSize: 18 }}>
          Some important things to keep in mind while booking a guide:
        </Text>
        <Text style={{ fontSize: 17 }}>1. Research</Text>
        <Text style={{ fontSize: 17 }}>2. Local Contacts</Text>
        <Text style={{ fontSize: 17 }}>3. Credentials and experience</Text>
        <Text style={{ fontSize: 17 }}>4. Personal Recommendation</Text>
      </Animatable.View>
      <Animatable.View
        style={[
          styles.about,
          {
            backgroundColor: "#00ced1",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        ]}
        animation={"fadeInUp"}
        duration={1000}
        delay={100}>
        <Text style={{ fontSize: 25, fontWeight: "600", color: "#f5f5f5" }}>
          How to Book a Guide?
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}>
          <Text style={{ fontSize: 18, color: "#f5f5f5" }}>
            Just Press on the Proceed Button below and you will be directed to a
            payment page. Select the necessary requirements and then pay
            accordingly.
          </Text>
          <View
            style={{
              marginBottom: 10,
              padding: 5,
              alignItems: "center",
            }}>
            <Button
              title="Proceed "
              onPress={() => props.navigation.navigate("Payment")}></Button>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Guidecomp;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  about: {
    flex: 1,
    padding: 20,
    backgroundColor: "#00ced1",
  },
});
