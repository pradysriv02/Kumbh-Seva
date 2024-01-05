import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "react-native-check-box";
import * as Animatable from "react-native-animatable";
import Pay from "./Pay";

const Payment = (props) => {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);
  const [agree5, setAgree5] = useState(false);

  const checkFun1 = () => {
    setAgree1(!agree1);
    setAgree2(false);
    setAgree3(false);
    setAgree4(false);
    setAgree5(false);
  };
  const checkFun2 = () => {
    setAgree1(false);
    setAgree2(!agree2);
    setAgree3(false);
    setAgree4(false);
    setAgree5(false);
  };
  const checkFun3 = () => {
    setAgree1(false);
    setAgree2(false);
    setAgree3(!agree3);
    setAgree4(false);
    setAgree5(false);
  };
  const checkFun4 = () => {
    setAgree1(false);
    setAgree2(false);
    setAgree3(false);
    setAgree4(!agree4);
    setAgree5(false);
  };
  const checkFun5 = () => {
    setAgree1(false);
    setAgree2(false);
    setAgree3(false);
    setAgree4(false);
    setAgree5(!agree5);
  };
  const plan1 = "1500";
  const plan2 = "3000";
  const plan3 = "4500";
  const plan4 = "6000";
  const plan5 = "8000";

  var data = "0";
  if (agree1) data = plan1;
  else if (agree2) data = plan2;
  else if (agree3) data = plan3;
  else if (agree4) data = plan4;
  else if (agree5) data = plan5;

  return (
    <View style={styles.container}>
      <Animatable.View
        style={[
          styles.card,
          { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
        ]}
        animation={"fadeInRight"}
        duration={1000}
        delay={200}>
        <Text style={{ fontSize: 30, fontWeight: "500", color: "#fff" }}>
          Select a Guide Plan:
        </Text>
        <View style={{ padding: 10 }}>
          <Checkbox
            rightText={"03 Hours:Rs. " + plan1}
            rightTextStyle={{ fontSize: 20, color: "#fff" }}
            style={{ marginVertical: 10 }}
            isChecked={agree1}
            onClick={checkFun1}
            checkedCheckBoxColor="#fff"
            uncheckedCheckBoxColor="#fff"></Checkbox>
          <Checkbox
            rightText={"06 Hours:Rs. " + plan2}
            rightTextStyle={{ fontSize: 20, color: "#fff" }}
            style={{ marginVertical: 10 }}
            isChecked={agree2}
            onClick={checkFun2}
            checkedCheckBoxColor="#fff"
            uncheckedCheckBoxColor="#fff"></Checkbox>
          <Checkbox
            rightText={"09 Hours:Rs. " + plan3}
            rightTextStyle={{ fontSize: 20, color: "#fff" }}
            style={{ marginVertical: 10 }}
            isChecked={agree3}
            onClick={checkFun3}
            checkedCheckBoxColor="#fff"
            uncheckedCheckBoxColor="#fff"></Checkbox>
          <Checkbox
            rightText={"12 Hours:Rs. " + plan4}
            rightTextStyle={{ fontSize: 20, color: "#fff" }}
            style={{ marginVertical: 10 }}
            isChecked={agree4}
            onClick={checkFun4}
            checkedCheckBoxColor="#fff"
            uncheckedCheckBoxColor="#fff"></Checkbox>
          <Checkbox
            rightText={"24 Hours:Rs. " + plan5}
            rightTextStyle={{ fontSize: 20, color: "#fff" }}
            style={{ marginVertical: 10 }}
            isChecked={agree5}
            onClick={checkFun5}
            checkedCheckBoxColor="#fff"
            uncheckedCheckBoxColor="#fff"></Checkbox>
        </View>
      </Animatable.View>
      <Animatable.View
        style={[styles.card, { backgroundColor: "#f5f5f5" }]}
        animation={"fadeInLeft"}
        duration={1000}
        delay={200}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>
          What will you get?{" "}
        </Text>
        <View style={{ display: "flex", gap: 10, padding: 10 }}>
          <Text style={{ fontSize: 18 }}>
            Guide will be booked after the guide meets you
          </Text>
          <Text style={{ fontSize: 18 }}>
            Places covered will depend upon the time duration.
          </Text>
          <Text style={{ fontSize: 18 }}>
            Languages to be used: Hindi, English
          </Text>
          <Text style={{ fontSize: 18 }}>
            Avoid giving tips or any sort of money to the guide
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
            width: "100%",
          }}>
          <Animatable.View
            style={{ width: "60%" }}
            animation={"fadeIn"}
            duration={1000}
            delay={200}>
            <Pay data={data} props={props} />
          </Animatable.View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    height: "40%",
    backgroundColor: "#00ced1",
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
});
