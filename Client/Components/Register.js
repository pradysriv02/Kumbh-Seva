import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const Register = (props) => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate("Home");
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.log(error);
      });
    setName(null);
    setEmail(null);
    setPassword(null);
    setAgree(false);
  };

  const addData = () => {
    const toAdd = {
      name: name,
      email: email,
    };

    firestore()
      .collection("Users")
      .add(toAdd)
      .then(() => console.log("User Added"));
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
      <View style={styles.conatiner2}>
        <Text style={styles.mainHeading}>SignUp</Text>
        <Text style={styles.description}>
          Register here to enjoy the services of Kumbh Guide
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Name</Text>
          <TextInput
            placeholder="Firstname Secondname"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.labels}>Enter Your Email</Text>
          <TextInput
            placeholder="Demo: abc"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.labels}>Enter Your Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.checkBox}>
            <Checkbox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#00ced1" : undefined}
            />
            <View style={{ flexDirection: "column" }}>
              <Text>I have read and agreed with the terms and </Text>
              <Text>conditions</Text>
            </View>
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
              createUser(), addData();
            }}>
            <Text style={styles.buttonText}>SignUp </Text>
          </TouchableOpacity>
          <View style={styles.registerHere}>
            <TouchableOpacity
              style={styles.registerHere}
              onPress={() => props.navigation.navigate("Login")}>
              <View style={{ flexDirection: "row" }}>
                <Text>Already have an account? </Text>
                <Text style={{ color: "#00ced1" }}>Login </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: "100%",

    backgroundColor: "#fff",
  },
  conatiner2: {
    paddingHorizontal: 20,
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
    paddingBottom: 15,
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
    marginTop: 5,
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
    marginTop: 10,
    gap: 5,
    paddingTop: 10,
  },
  button: {
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    padding: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  registerHere: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
});
