import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RazorpayCheckout from "react-native-razorpay";
const Pay = (props) => {
  const amount = props.data;

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          let id = null;
          await fetch("https://canteen-app-backend.onrender.com/payment", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount,
            }),
          })
            .then((res) => res.json())
            .then((data) => (id = data.id))
            .catch((e) => {
              alert("Done");
              return;
            });
          var options = {
            description: "Credits towards consultation",
            image: "https://i.imgur.com/3g7nmJC.jpg",
            currency: "INR",
            key: "rzp_test_GXwGCmJSauvS0K",
            amount: amount * 100,
            name: "Kumbh Guide",
            order_id: id,
            prefill: {
              email: "gaurav.kumar@example.com",
              contact: "9191919191",
              name: "Gaurav Kumar",
            },
            theme: { color: "#53a20e" },
          };
          RazorpayCheckout.open(options)
            .then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
              props.props.navigation.navigate("Booking");
            })
            .catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
        disabled={amount === "0" ? true : false}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "#f5f5f5",
          }}>
          Pay Now: Rs. {amount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  button: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ced1",
    borderRadius: 10,
  },
});
