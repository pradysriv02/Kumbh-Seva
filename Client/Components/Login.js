import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useEffect, useState } from "react";
import auth, { firebase } from "@react-native-firebase/auth";
import { userLogIn } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";
export default login = (props) => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginUser = () => {
    firestore()
      .collection("Users")
      .get()
      .then((querySnapshot) => {
        console.log("Total users: ", querySnapshot.size);

        querySnapshot.forEach((documentSnapshot) => {
          if (documentSnapshot.data().email === email) {
            dispatch(userLogIn(documentSnapshot.data()));
          }
        });
      });

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate("Home");
        console.log("Logged-In");
        const user = { email, password };
      })
      .then(() => {
        setEmail(null);
        setPassword(null);
        setAgree(false);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
        }

        if (error.code === "auth/invalid-email") {
          alert("Invalid Credentials");
        }
        if (error.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/login-bg.jpg")}
        style={{
          height: "30%",
          width: "100%",
          borderBottomLeftRadius: 80,
        }}></Image>
      <View style={styles.container2}>
        <Text style={styles.mainHeading}>Login </Text>
        <Text style={styles.description}>
          Welcome to your exclusive Kumbh Guide App
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Username</Text>
          <TextInput
            placeholder="Demo: abc"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.labels}>Enter your Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={styles.checkBox}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#00ced1" : undefined}></CheckBox>
            <Text>I have read and agreed with the terms and conditions</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: agree ? "#00ced1" : "grey",
              },
            ]}
            disabled={!agree}
            onPress={() => {
              if (email && password) {
                loginUser();
              }
            }}>
            <Text style={styles.buttonText}>Login </Text>
          </TouchableOpacity>
          <View style={styles.registerHere}>
            <TouchableOpacity
              style={styles.registerHere}
              onPress={() => props.navigation.navigate("Register")}>
              <View style={{ flexDirection: "row" }}>
                <Text>Dont have an account? </Text>
                <Text style={{ color: "#00ced1" }}> SignUp </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container2: {
    padding: 20,
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: "500",
    paddingBottom: 15,
    paddingTop: 30,
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 18,
    borderColor: "#00ced1",
  },
  checkBox: {
    flexDirection: "row",
    marginTop: 15,
    gap: 5,
    paddingTop: 10,
  },
  button: {
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 25,
    justifyContent: "center",
    padding: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  registerHere: {
    display: "flex",
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
});
