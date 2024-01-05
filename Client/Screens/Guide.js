import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Payment from "./Payment";
import Guidecomp from "../Components/Guidecomp";
import Pay from "./Pay";
import Booking from "./Booking";

const stack = createNativeStackNavigator();
const Guide = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Guidecomp" component={Guidecomp} />
      <stack.Screen name="Payment" component={Payment} />
      <stack.Screen name="Pay" component={Pay} />
      <stack.Screen name="Booking" component={Booking} />
    </stack.Navigator>
  );
};

export default Guide;
