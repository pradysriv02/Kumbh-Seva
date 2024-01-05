import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import store from "./Components/redux/store";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Register" component={Register} />
            <stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
