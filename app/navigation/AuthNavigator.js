import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RidesScreen from "./../screens/RidesScreen";
import OrderScreen from "./../screens/OrderScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Rides" component={RidesScreen} />{" "}
    <Stack.Screen name="Order" component={OrderScreen} />{" "}
  </Stack.Navigator>
);

export default AuthNavigator;
